import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  inject,
  signal,
  HostListener,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { SUGGESTED_QUERIES } from '../../data/portfolio.data';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.scss',
})
export class InputBoxComponent {
  private platformId = inject(PLATFORM_ID);
  readonly chat = inject(ChatService);

  @ViewChild('input') inputRef?: ElementRef<HTMLInputElement>;

  readonly value = signal('');
  readonly menuOpen = signal(false);
  readonly suggestions = SUGGESTED_QUERIES;
  readonly focused = signal(false);

  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value);
  }

  onFocus(): void {
    this.focused.set(true);
  }

  onBlur(): void {
    this.focused.set(false);
  }

  send(): void {
    const v = this.value().trim();
    if (!v) return;
    this.chat.sendUserQuery(v);
    this.value.set('');
    if (this.inputRef) this.inputRef.nativeElement.value = '';
  }

  pickSuggestion(s: string): void {
    this.value.set(s);
    this.inputRef?.nativeElement.focus();
  }

  navigateTo(label: string): void {
    this.menuOpen.set(false);
    this.chat.sendUserQuery(label);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-popup') && !target.closest('.menu-btn')) {
      this.menuOpen.set(false);
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    if (isPlatformBrowser(this.platformId) && this.focused()) {
      this.send();
      event.preventDefault();
    }
  }
}
