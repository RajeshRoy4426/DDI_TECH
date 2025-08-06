import { Component, inject, Input } from '@angular/core';
import { Program } from '../../interfaces/course-interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-course-card',
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzTagModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzBadgeModule,
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {
  @Input() program!: Program;
  @Input() compact: boolean = false;
  private router = inject(Router);
  private courseService = inject(CourseService);
  skillTags: { name: string; color: string }[] = [];

  ngOnInit() {
    if (this.program.skills && this.program.skills.length > 0) {
      this.skillTags = this.program.skills.map((skill) => ({
        name: skill,
        color: this.courseService.getRandomColor(),
      }));
    }
  }

  /**
   * Navigate to the course detail page
   */
  navigateToCourse() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/program'], {
        queryParams: { id: this.program.id },
      })
    );
    window.open(window.location.origin + url, '_blank');
  }
}
