import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BalanceDto } from '../balanceDto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  responseStatusClockIn: number;
  responseStatusClockOut: number;
  balanceData: BalanceDto;
  clockInDateFromApi;
  clockOutDateFromApi;

  clockIn(): void {
    this.apiService.postClockIn().subscribe(
      (response) => {
        this.responseStatusClockIn = response.status;
        this.clockInDateFromApi = response.body;
      },
      (error: HttpErrorResponse) => {
        this.responseStatusClockIn = error.status;
      }
    );
    this.clearAfterTime();
  }

  clockOut(): void {
    this.apiService.postClockOut().subscribe(
      (response) => {
        this.responseStatusClockOut = response.status;
        this.clockOutDateFromApi = response.body;
      },
      (error: HttpErrorResponse) => {
        this.responseStatusClockOut = error.status;
      }
    );
    this.clearAfterTime();
  }
  clearAfterTime(): void {
    setTimeout(() => {
      this.responseStatusClockIn = undefined;
      this.responseStatusClockOut = undefined;
    }, 3000);
  }
  ngOnInit() {
    this.apiService
      .getBalanceToThisDay()
      .subscribe((data) => (this.balanceData = data));
  }
}
