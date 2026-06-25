import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
})
export class HomeSectionComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private theme = inject(ThemeService);

  readonly profile = PROFILE;
  readonly isDark = this.theme.theme;

  readonly displayText = signal('');
  readonly isDeleting = signal(false);

  private roleIndex = 0;
  private charIndex = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  private tick(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const role = PROFILE.typingRoles[this.roleIndex];

    if (!this.isDeleting()) {
      this.displayText.set(role.substring(0, this.charIndex + 1));
      this.charIndex++;
      if (this.charIndex === role.length) {
        this.isDeleting.set(true);
        this.timer = setTimeout(() => this.tick(), 1800);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 80);
    } else {
      this.displayText.set(role.substring(0, this.charIndex - 1));
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting.set(false);
        this.roleIndex = (this.roleIndex + 1) % PROFILE.typingRoles.length;
        this.timer = setTimeout(() => this.tick(), 250);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 40);
    }
  }
}
