import { OwlOptions } from 'ngx-owl-carousel-o';
import { Program } from './course-interface';

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot' | 'typing';
  timestamp: Date;
  type: 'text' | 'course-suggestion' | 'generating' | 'program' | 'error';
  programs?: Program[];
  options?: any[];
}
