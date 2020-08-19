import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private apiService: ApiService) {}
  ClockIn(): void {
    this.apiService.PostClockIn().subscribe((response) => {
      console.log(response);
    });
  }
  ClockOut(): void {
    this.apiService.PostClockOut().subscribe((response) => {
      console.log(response);
    });
  }
}
