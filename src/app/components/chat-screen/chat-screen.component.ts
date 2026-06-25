import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  inject,
  effect,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-chat-screen',
  standalone: true,
  imports: [CommonModule, SectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.scss',
})
export class ChatScreenComponent implements AfterViewChecked {
  private platformId = inject(PLATFORM_ID);
  readonly chat = inject(ChatService);

  @ViewChild('scrollHost') scrollHost?: ElementRef<HTMLElement>;

  private lastLength = 0;
  private pending = false;

  constructor() {
    effect(() => {
      // re-run scroll when messages change
      this.chat.messages();
      this.scheduleScroll();
    });
  }

  ngAfterViewChecked(): void {
    const len = this.chat.messages().length;
    if (len !== this.lastLength) {
      this.lastLength = len;
      this.scheduleScroll();
    }
  }

  private scheduleScroll(): void {
    if (this.pending) return;
    this.pending = true;
    if (!isPlatformBrowser(this.platformId)) {
      this.pending = false;
      return;
    }
    requestAnimationFrame(() => {
      this.pending = false;
      if (!this.scrollHost) return;
      const el = this.scrollHost.nativeElement;
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    });
  }
}
