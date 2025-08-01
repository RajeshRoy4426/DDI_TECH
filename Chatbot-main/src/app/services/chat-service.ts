import { inject, Injectable, signal } from '@angular/core';
import { ChatMessage } from '../interfaces/chat-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './config';
import { Storage } from './storage';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private http = inject(HttpClient);
  private configService = inject(Config);
  private storageService = inject(Storage);
  private message = inject(NzMessageService);
  private chatMessages = signal<ChatMessage[]>([]);
  private cancelPending$ = new Subject<void>();

  constructor() {
    // Initialize chat messages from local storage
    const chatMessages = this.storageService.getItem('chatMessages');
    if (chatMessages) {
      this.chatMessages.set(chatMessages);
    } else {
      this.initializeChat();
    }
  }

  /**
   * Polling function to generate program
   * @param taskId - The task ID to poll for
   */
  pollForProgram(taskId: string): void {
    const POLL_INTERVAL = 10000; // 10 seconds
    const TIMEOUT_MS = 8 * 60 * 1000; // 8 minutes
    const startTime = Date.now();

    this.cancelPending$ = new Subject<void>(); // Reset subject
    let isCancelled = false;

    const URL = `${this.configService.apiBaseUrl}/api/program-status/${taskId}`;

    const poll = () => {
      if (isCancelled) return;

      const elapsed = Date.now() - startTime;
      if (elapsed > TIMEOUT_MS) {
        this.message.error('Program generation timed out after 8 minutes.');
        return;
      }

      console.log(
        `Polling at ${new Date().toISOString()} | Task ID: ${taskId}`
      );

      this.http
        .get(URL, { responseType: 'text' })
        .pipe(takeUntil(this.cancelPending$))
        .subscribe({
          next: (response) => {
            if (isCancelled) return;

            let res: any;
            try {
              res = JSON.parse(response);
            } catch (e) {
              console.warn('Invalid JSON:', response);
              return; // Skip retrying for malformed response
            }

            switch (res?.type) {
              case 'program':
                this.addBotResponse(res);
                break;
              case 'generating':
                setTimeout(poll, POLL_INTERVAL);
                break;
              case 'error':
                this.addBotResponse({
                  message:
                    'Sorry, I was unable to generate the program. Please try again.',
                  suggestedPrograms: [],
                });
                break;
              default:
                break;
            }
          },
          error: (err) => {
            if (isCancelled) return;
            console.error('Polling error:', err);

            this.message.error('Error checking program status.');
            this.addBotResponse({
              message:
                'Sorry, I was unable to generate the program. Please try again.',
              suggestedPrograms: [],
            });
          },
        });
    };

    // Set cancellation logic
    this.cancelPending$.subscribe(() => {
      isCancelled = true;
    });

    poll();
  }

  /**
   * Initialize chat
   */
  initializeChat() {
    const chatMessage: ChatMessage = {
      id: this.generateId(),
      content:
        "Hey! I'm your AI assistant here to generate a personalized program for you.",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
    };
    this.addMessage(chatMessage);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  /**
   * Send message to server
   * @param message - The message to send
   */
  sendMessage(message: string) {
    const newMessage: ChatMessage = {
      id: this.generateId(),
      content: message,
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
    };
    this.addMessage(newMessage);

    return this.sendMessageToServer(message);
  }

  /**
   * Send message to server
   * @param message - The message to send
   */
  sendMessageToServer(message: string) {
    this.addTypingResponse();

    const chatEndpoint = this.configService.getApiEndpoint('chat');
    const URL = `${this.configService.apiBaseUrl}${chatEndpoint}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let body: any = {
      query: message,
    };

    const sessionId = this.storageService.getItem('sessionId');
    if (sessionId) {
      body.session_id = sessionId;
    }

    return this.http.post(URL, body, { headers });
  }

  /**
   * Add typing status to chat when bot is thinking
   */
  addTypingResponse() {
    const typingMessage: ChatMessage = {
      id: this.generateId(),
      content: 'Thinking...',
      sender: 'typing',
      timestamp: new Date(),
      type: 'text',
    };

    this.addMessage(typingMessage);
  }

  /**
   * Start polling for program status
   * @param response - The response from the server
   */
  startPolling(response: any) {
    const botResponse: ChatMessage = {
      id: this.generateId(),
      content: 'Generating programs',
      type: 'generating',
      sender: 'typing',
      timestamp: new Date(),
    };

    this.chatMessages.update((messages) => [
      ...messages.filter(
        (msg) =>
          msg.sender !== 'typing' &&
          !(msg.sender === 'bot' && msg.type === 'generating')
      ),
      botResponse,
    ]);

    this.storageService.setItem('chatMessages', this.chatMessages());

    this.pollForProgram(response.data.task_id);
  }

  /**
   * Add bot response to chat
   * @param response - The response from the server
   */
  addBotResponse(response: any): void {
    let botMessage: ChatMessage = {
      id: response.id || this.generateId(),
      content:
        response.message ||
        response.data?.message ||
        'Here are some programs that might interest you!',
      type: response.type,
      sender: 'bot',
      timestamp: new Date(),
      programs: response.suggestedPrograms || response.data?.program || [],
    };

    if (response.options) {
      botMessage = {
        ...botMessage,
        options: response.options,
      };
    }

    this.chatMessages.update((messages) => [
      ...messages.filter((msg) => msg.sender !== 'typing'),
      botMessage,
    ]);

    this.storageService.setItem('chatMessages', this.chatMessages());
  }

  /**
   * Add message to chat
   * @param message - The message to add
   */
  addMessage(message: ChatMessage) {
    this.chatMessages.update((messages) => [...messages, message]);
    this.storageService.setItem('chatMessages', this.chatMessages());
  }

  /**
   * Get all messages from chat
   * @returns The messages from the chat
   */
  getMessages() {
    return this.chatMessages();
  }

  /**
   * Clear chat history from server
   */
  clearChatApi() {
    const chatEndpoint = this.configService.getApiEndpoint('clearhistory');
    const sessionId = this.storageService.getItem('sessionId');
    const URL = `${this.configService.apiBaseUrl}${chatEndpoint}/${sessionId}`;
    return this.http.post(URL, {});
  }

  /**
   * Clear chat history from local storage and reset chat
   * Cancel all pending requests
   */
  clearChat() {
    this.cancelPending$.next();
    this.cancelPending$.complete();
    this.chatMessages.set([]);
    this.storageService.clear();
    this.initializeChat();
  }
}
