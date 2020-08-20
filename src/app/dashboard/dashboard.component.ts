import {Component} from '@angular/core';
import {ApiService} from '../Services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private apiService: ApiService) {}
  clockIn(): void {
    this.apiService.postClockIn().subscribe((response) => {
      console.log(response);
    });
  }
  clockOut(): void {
    this.apiService.postClockOut().subscribe((response) => {
      console.log(response);
    });
  }
}
