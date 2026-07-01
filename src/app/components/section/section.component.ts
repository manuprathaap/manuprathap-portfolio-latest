import { Component, Input, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionKey, ProjectItem, SkillItem } from '../../models/chat.models';
import {
  PROFILE,
  PROJECTS,
  EXPERIENCE,
  SKILLS,
  EDUCATION,
  LANGUAGES,
  CERTIFICATIONS,
  SECTIONS,
} from '../../data/portfolio.data';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input({ required: true }) sectionKey!: SectionKey;

  readonly profile = PROFILE;
  readonly projects = PROJECTS;
  readonly experience = EXPERIENCE;
  readonly skills = SKILLS;
  readonly education = EDUCATION;
  readonly languages = LANGUAGES;
  readonly certs = CERTIFICATIONS;

  readonly visibleProjects = signal(0);

  readonly currentProjects = computed(() =>
    this.projects.slice(0, this.visibleProjects() || 1)
  );

  ngOnInit(): void {
    if (this.sectionKey === 'projects') this.visibleProjects.set(1);
  }

  showMoreProjects(): void {
    if (this.visibleProjects() < this.projects.length) {
      this.visibleProjects.update((n) => n + 1);
    } else {
      this.visibleProjects.set(1);
    }
  }

  getDots(level: number): boolean[] {
    const total = 10;
    const active = Math.round((level / 100) * total);
    return Array.from({ length: total }, (_, i) => i < active);
  }

  getSectionTitle(key: SectionKey): string {
    return SECTIONS.find((section) => section.key === key)?.title ?? 'Section';
  }

  groupedSkills(): { category: string; items: SkillItem[] }[] {
    const map = new Map<string, SkillItem[]>();
    for (const s of this.skills) {
      if (!map.has(s.category)) map.set(s.category, []);
      map.get(s.category)!.push(s);
    }
    return Array.from(map.entries()).map(([category, items]) => ({ category, items }));
  }

  trackByProject = (_: number, p: ProjectItem) => p.id;
  trackBySkill = (_: number, s: SkillItem) => s.name;
}
