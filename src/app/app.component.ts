import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { InputBoxComponent } from './components/input-box/input-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeSectionComponent, ChatScreenComponent, InputBoxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
