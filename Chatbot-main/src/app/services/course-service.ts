import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Config } from './config';
import { Asset, ProgramDetails, Topic } from '../interfaces/course-interface';
import { Storage } from './storage';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http = inject(HttpClient);
  private configService = inject(Config);
  private storageService = inject(Storage);
  private programDetails = signal<any>(null);
  constructor() {}

  /**
   * Get the program details from the API
   * @param courseId - The ID of the course
   * @returns Observable<any>
   */
  getProgramDetailsApi(courseId: string) {
    const endpoint = this.configService.getApiEndpoint('programDetails');
    const URL = `${this.configService.apiBaseUrl}${endpoint}/${courseId}`;

    return this.http.get(URL);
  }

  /**
   * Add the program details to the programDetails signal
   * @param response - The response from the API
   */
  addProgramDetails(response: any) {
    const programDetails: ProgramDetails = {
      program_id: response?.id || '',
      title: response?.title || '',
      description: response?.description || '',
      totalHours: response?.duration_hours || 0,
      skills: response?.skills || [],
      level: response?.difficulty_level || '',
    };

    if (response.program && response.program.length > 0) {
      const program: Topic[] = response.program.map((item: any) => {
        let asset: Asset[] = [];
        if (item.asset && item.asset.length > 0) {
          asset = item.asset.map((asset: any) => {
            return {
              asset_id: asset?.asset_id || '',
              title: asset?.title || '',
              description: asset?.description || '',
            };
          });
        }

        return {
          id: item?.topic_id
            ? item.topic_id
            : item?.asset_id
            ? item.asset_id
            : '',
          title: item?.title || '',
          description: item?.description || '',
          tags: item?.tags || [],
          asset: asset,
        };
      });
      programDetails.programs = program;
    }

    this.programDetails.set(programDetails);
  }

  /**
   * Get the program details from the programDetails signal
   * @returns ProgramDetails
   */
  getProgramDetails() {
    return this.programDetails();
  }

  /**
   * Get a random color for the course card to show in the tag
   * @returns string
   */
  getRandomColor(): string {
    const colors = [
      'pink',
      'red',
      'yellow',
      'orange',
      'cyan',
      'green',
      'blue',
      'purple',
      'geekblue',
      'magenta',
      'volcano',
      'gold',
      'lime',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
