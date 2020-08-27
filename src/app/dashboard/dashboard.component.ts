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
  clockInInformation = 'Zarejestrowano wejście o ';
  clockOutInformation = 'Zarejestrowano wyjście o ';

  clockIn(): void {
    this.apiService.postClockIn().subscribe(
      (response) => {
        console.log(response);
        this.responseStatusClockIn = response.status;
        this.clockInDateFromApi = response.body;
        this.clockInInformation += this.clockInDateFromApi;
      },
      (error: HttpErrorResponse) => {
        this.responseStatusClockIn = error.status;
      }
    );
  }

  clockOut(): void {
    this.apiService.postClockOut().subscribe(
      (response) => {
        console.log(response);
        this.responseStatusClockOut = response.status;
        this.clockOutDateFromApi = response.body;
        this.clockOutInformation += this.clockOutDateFromApi;
      },
      (error: HttpErrorResponse) => {
        this.responseStatusClockOut = error.status;
      }
    );
  }

  ngOnInit() {
    this.apiService
      .getBalanceToThisDay()
      .subscribe((data) => (this.balanceData = data));
  }
}
