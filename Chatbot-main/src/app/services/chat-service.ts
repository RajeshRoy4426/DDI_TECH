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
    const chatMessages = this.storageService.getItem('chatMessages');
    if (chatMessages) {
      this.chatMessages.set(chatMessages);
    } else {
      this.initializeChat();
    }
  }

  pollForProgram(taskId: string) {
    const pollInterval = 10000; // 10 seconds
    const timeoutMs = 8 * 60 * 1000; // 8 minutes
    const startTime = Date.now();

    const poll = () => {
      const elapsed = Date.now() - startTime;
      const URL = `${this.configService.apiBaseUrl}/api/program-status/${taskId}`;
      console.log(
        `Polling at ${new Date().toISOString()} | Task ID: ${taskId}`
      );

      if (elapsed > timeoutMs) {
        this.message.error('Program generation timed out after 8 minutes.');
        return;
      }

      this.http.get(URL, { responseType: 'text' }).pipe(takeUntil(this.cancelPending$)).subscribe({
        next: (raw) => {
          try {
            const res = JSON.parse(raw);

            if (res.type === 'program') {
              this.addBotResponse(res);
            } else if (res.type === 'generating') {
              setTimeout(poll, pollInterval);
            } else if (res.type === 'error') {
              this.addBotResponse({
                message:
                  'Sorry, I was unable to generate the program. Please try again.',
                suggestedPrograms: [],
              });
            } else {
              // this.message.warning('Unexpected response type.');
            }
          } catch (e) {
            // console.error('Failed to parse JSON:', e, raw);
            // this.message.error('Invalid response format from server.');
          }
        },
        error: (err) => {
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

    poll();
  }
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

  addBotResponse(response: any): void {
    // if (response.type === 'generating' && response.data?.task_id) {
    //   const generatingMessage: ChatMessage = {
    //     id: this.generateId(),
    //     content: response.data.status || 'Program is generating...',
    //     type: 'text',
    //     sender: 'bot',
    //     timestamp: new Date(),
    //   };

    //   this.chatMessages.update((messages) => [
    //     ...messages.filter((msg) => msg.sender !== 'typing'),
    //     generatingMessage,
    //   ]);
    //   this.storageService.setItem('chatMessages', this.chatMessages());

    //   this.pollForProgram(response.data.task_id);
    //   return;
    // }
    if (response.type === 'generating' && response.data?.task_id) {
      const loadingMessage: ChatMessage = {
        id: this.generateId(),
        content: '', // 👈 No text
        type: 'generating', // 👈 So you can show a spinner
        sender: 'typing', // 👈 Spinner-style
        timestamp: new Date(),
      };

      this.chatMessages.update((messages) => [
        ...messages.filter(
          (msg) =>
            msg.sender !== 'typing' &&
            !(msg.sender === 'bot' && msg.type === 'generating')
        ),
        loadingMessage,
      ]);

      this.storageService.setItem('chatMessages', this.chatMessages());

      this.pollForProgram(response.data.task_id);
      return;
    }
    //   if (response.type === 'error') {
    //   const errorMessage: ChatMessage = {
    //     id: this.generateId(),
    //     content: response.data?.status || 'An unknown error occurred.', // Use response.data directly
    //     type: 'error',
    //     sender: 'bot',
    //     timestamp: new Date(),
    //   };

    //   this.chatMessages.update((messages) => [
    //     ...messages.filter(
    //       (msg) =>
    //         msg.sender !== 'typing' &&
    //         !(msg.sender === 'bot' && msg.type === 'error')
    //     ),
    //     errorMessage,
    //   ]);

    //   this.storageService.setItem('chatMessages', this.chatMessages());
    //   return;
    // }

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
      ...messages.filter(
        (msg) => msg.sender !== 'typing'
        // &&
        //   !(msg.sender === 'bot' && msg.type === 'generating')
      ),
      botMessage,
    ]);

    this.storageService.setItem('chatMessages', this.chatMessages());
  }

  addMessage(message: ChatMessage) {
    this.chatMessages.update((messages) => [...messages, message]);
    this.storageService.setItem('chatMessages', this.chatMessages());
  }

  getMessages() {
    return this.chatMessages();
  }

  clearChatApi() {
    const chatEndpoint = this.configService.getApiEndpoint('clearhistory');
    const sessionId = this.storageService.getItem('sessionId');
    const URL = `${this.configService.apiBaseUrl}${chatEndpoint}/${sessionId}`;
    return this.http.post(URL, {});
  }

  clearChat() {
    this.cancelPending$.next();
    this.cancelPending$.complete();
    this.chatMessages.set([]);
    this.storageService.clear();
    this.initializeChat();
  }


}
