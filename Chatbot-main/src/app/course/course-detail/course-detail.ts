import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ProgramDetails } from '../../interfaces/course-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzListModule } from 'ng-zorro-antd/list';
import { CourseService } from '../../services/course-service';
import { finalize, Subject, takeUntil, timeout } from 'rxjs';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { Storage } from '../../services/storage';
import { Config } from '../../services/config';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-course-detail',
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzSpinModule,
    NzAvatarModule,
    NzTabsModule,
    NzButtonModule,
    NzRateModule,
    NzTagModule,
    NzStepsModule,
    NzListModule,
    NzSkeletonModule,
    NzCollapseModule,
    NzIconModule,
  ],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.scss',
})
export class CourseDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private courseService = inject(CourseService);
  private message = inject(NzMessageService);
  private storageService = inject(Storage);
  private configService = inject(Config);
  program: ProgramDetails | null = null;
  isLoading = false;
  private destroy$ = new Subject<void>();
  appInfo: any = null;
  skillTags: { name: string; color: string }[] = [];
  programTags: { name: string; color: string }[] = [];
  constructor() {
    effect(() => {
      this.program = this.courseService.getProgramDetails();
      if (
        this.program &&
        this.program.skills &&
        this.program.skills.length > 0
      ) {
        this.skillTags = this.program.skills.map((skill) => ({
          name: skill,
          color: this.courseService.getRandomColor(),
        }));
      }

      if (
        this.program &&
        this.program.programs &&
        this.program.programs.length > 0
      ) {
        this.program.programs.forEach((program) => {
          if (program.tags && program.tags.length > 0) {
            program.tags = program.tags.map((tag) => {
              return {
                name: tag,
                color: this.courseService.getRandomColor(),
              };
            });
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.appInfo = this.configService.appInfo;
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const programId = params.get('id');
      if (programId) {
        this.loadProgramDetails(programId);
      } else {
        this.message.error('Program ID is required');
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Load program details from server
   * @param courseId - The course ID to load
   */
  loadProgramDetails(courseId: string): void {
    this.isLoading = true;

    this.courseService
      .getProgramDetailsApi(courseId)
      .pipe(
        timeout(this.appInfo.requestTimeout),
        takeUntil(this.destroy$),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (response: any) => {
          if (response) {
            const response_data = response.data;
            this.courseService.addProgramDetails(response_data);
          } else {
            this.message.error('Failed to load course details');
            this.router.navigate(['/']);
          }
        },
        error: (error) => {
          console.error('Error loading course details:', error);
          this.message.error('Failed to load course details');
          this.router.navigate(['/']);
        },
      });
  }

  /**
   * Navigate to home page
   */
  goBack(): void {
    this.router.navigate(['/']);
  }
}
