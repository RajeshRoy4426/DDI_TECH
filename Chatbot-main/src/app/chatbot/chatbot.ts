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
import { ChatMessage, carouselOptions } from '../interfaces/chat-interface';
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
  carouselOptions = carouselOptions;
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

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

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
  setBotResponse(response: any) {
    const responseType = response.type;
    const responseData = response.data;
    const sessionId = response.session_id;

    this.storageService.setItem('sessionId', sessionId);

    if (responseType === 'generating' && responseData?.task_id) {
      this.chatService.addBotResponse(response);
      return;
    }

    if (responseType === 'program') {
      this.chatService.addBotResponse({
        id: responseData.id,
        type: responseType,
        message: responseData.message || 'Here are some programs...',
        suggestedPrograms: responseData.program || [],
      });
      return;
    }

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
    //   if (responseType === 'error') {
    //   this.chatService.addBotResponse({
    //     type: responseType,
    //     message: responseData.message || 'Sorry, I have failed to generate the Programme',
    //   });
    //   return;
    // }

    // fallback
    this.chatService.addBotResponse({
      message: 'Sorry, I didn’t understand that.',
      suggestedPrograms: [],
    });
  }

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
