import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private apiService: ApiService) {}
  errorClockIn: number = null;
  errorClockOut: number = null;
  clockIn(): void {
    this.apiService.postClockIn().subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        this.errorClockIn = error.status;
      }
    );
  }

  clockOut(): void {
    this.apiService.postClockOut().subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        this.errorClockOut = error.status;
      }
    );
  }
}
