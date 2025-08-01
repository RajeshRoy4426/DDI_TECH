import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { finalize, timeout } from 'rxjs';
import { ChatMessage } from '../interfaces/chat-interface';
import { ChatService } from '../services/chat-service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CourseCard } from '../course/course-card/course-card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { Config } from '../services/config';
import { Storage } from '../services/storage';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzSpinModule,
    NzDividerModule,
    NzAvatarModule,
    NzDatePickerModule,
    CourseCard,
    NzGridModule,
    NzCollapseModule,
    CarouselModule,
    NzToolTipModule,
    NzModalModule,
    NzRadioModule,
  ],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
})
export class Chatbot {
  @ViewChild('chatInput') chatInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;
  private chatService = inject(ChatService);
  private message = inject(NzMessageService);
  private modal = inject(NzModalService);
  private configService = inject(Config);
  private storageService = inject(Storage);
  chatMessages: ChatMessage[] = [];
  currentMessage = '';
  isLoading = false;
  private shouldScrollToBottom = false;
  isVisible = false;
  isOkLoading = false;
  appInfo: any = null;
  radioValue: string = '';

  constructor() {
    effect(
      () => {
        this.chatMessages = this.chatService.getMessages();

        this.shouldScrollToBottom = true;
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    this.appInfo = this.configService.appInfo;
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom && this.chatMessages.length > 0) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  /**
   * Function to clear chat history
   */
  clearChat() {
    this.modal.warning({
      nzTitle: 'Delete Chat?',
      nzContent: 'This will delete all your chat history.',
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
      nzOkLoading: this.isOkLoading,
      nzOnOk: () => {
        this.isOkLoading = true;
        this.chatService.clearChatApi().subscribe({
          next: (res: any) => {
            if (res) {
              this.radioValue = '';
              this.isOkLoading = false;
              this.chatService.clearChat();
            }
          },
          error: (err: any) => {
            console.error('Error clearing chat:', err);
            this.message.error('Error clearing chat');
            this.isOkLoading = false;
          },
        });
      },
    });
  }

  /**
   * Function to send message when user presses enter
   * @param event - The keyboard event
   */
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  /**
   * Function to send message to server
   */
  sendMessage() {
    this.isLoading = true;
    const messageContent = this.currentMessage.trim();
    this.currentMessage = '';

    if (messageContent) {
      this.chatService
        .sendMessage(messageContent)
        .pipe(
          timeout(this.appInfo.requestTimeout),
          finalize(() => {
            this.isLoading = false;
            setTimeout(() => this.chatInput?.nativeElement.focus(), 500);
          })
        )
        .subscribe({
          next: (response: any) => {
            if (response) {
              this.setBotResponse(response);
            }
          },
          error: (error) => {
            console.error('Error sending message:', error);
            this.message.error('Failed to send message. Please try again.');
            this.chatService.addBotResponse({
              message: 'Sorry, I encountered an error. Please try again.',
              suggestedPrograms: [],
            });
          },
        });
    }
  }

  /**
   * Function to set bot response based on response type
   * @param response - The response from the server
   */
  setBotResponse(response: any) {
    const responseType = response.type;
    const responseData = response.data;
    const sessionId = response.session_id;

    this.storageService.setItem('sessionId', sessionId);

    // If response type is generating, start polling for program status
    if (responseType === 'generating') {
      this.chatService.startPolling(response);
      return;
    }

    // If response type is program, add program to chat
    if (responseType === 'program') {
      let botResponse: any = {
        id: responseData.id,
        type: responseType,
        message: responseData.message || 'Here are some programs...',
        suggestedPrograms: responseData.program || [],
      };

      this.chatService.addBotResponse(botResponse);
      return;
    }

    // If response type is basic, add basic response to chat
    if (responseType === 'basic') {
      let botResponse: any = {
        id: responseData.id,
        type: responseType,
        message: responseData.message || 'Okay, let me know how I can help!',
      };

      if (responseData.options) {
        botResponse = {
          ...botResponse,
          options: responseData.options,
        };
      }
      this.chatService.addBotResponse(botResponse);
      return;
    }
  }

  /**
   * Function to handle option selection from bot response
   * @param event - The event object
   */
  onOptionSelected(event: any) {
    const selectedOption = event;
    this.chatMessages.forEach((message) => {
      if (message.options && message.options.length > 0) {
        message.options.forEach((option) => {
          option.disabled = true;
        });
      }
    });
    this.currentMessage = selectedOption;
    this.radioValue = '';
    this.sendMessage();
  }

  /**
   * Function to scroll to bottom of chat container
   */
  private scrollToBottom() {
    try {
      const element = this.chatContainer.nativeElement;
      element.scrollTo({
        top: element.scrollHeight,
        behavior: 'smooth',
      });
    } catch (err) {
      console.error('Could not scroll to bottom:', err);
    }
  }
}
