import { Injectable, signal, computed } from '@angular/core';
import { ChatMessage, SectionKey } from '../models/chat.models';
import { SECTIONS } from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class ChatService {
  readonly messages = signal<ChatMessage[]>([
    {
      id: this.uid(),
      sender: 'bot',
      sectionKey: 'hello',
      timestamp: Date.now(),
    },
  ]);

  readonly hasMessages = computed(() => this.messages().length > 0);

  sendUserQuery(text: string): void {
    const trimmed = text.trim();
    if (!trimmed) return;

    this.messages.update((msgs) => [
      ...msgs,
      {
        id: this.uid(),
        sender: 'user',
        text: trimmed,
        timestamp: Date.now(),
      },
    ]);

    const section = this.matchSection(trimmed);

    setTimeout(() => {
      this.messages.update((msgs) => [
        ...msgs,
        {
          id: this.uid(),
          sender: 'bot',
          text: section === 'about' && trimmed.toLowerCase() !== 'about' ? this.buildFallbackMessage() : undefined,
          sectionKey: section === 'about' && trimmed.toLowerCase() !== 'about' ? undefined : section,
          timestamp: Date.now(),
        },
      ]);
    }, 350);
  }

  reset(): void {
    this.messages.set([
      {
        id: this.uid(),
        sender: 'bot',
        sectionKey: 'hello',
        timestamp: Date.now(),
      },
    ]);
  }

  private matchSection(input: string): SectionKey {
    const q = input.toLowerCase().trim();

    if (q === 'about') return 'about';

    // direct hit
    for (const s of SECTIONS) {
      if (s.key === q) return s.key;
    }
    // keyword hit
    for (const s of SECTIONS) {
      if (s.keywords.some((k) => q.includes(k))) return s.key;
    }
    // fallback
    return 'about';
  }

  private buildFallbackMessage(): string {
    const names = SECTIONS.map((section) => section.title).join(', ');
    return `I didn't recognize that request. Try one of these section names: ${names}`;
  }

  private uid(): string {
    return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }
}
