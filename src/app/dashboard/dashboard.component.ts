import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BalanceDto } from '../balanceDto';
import * as moment from 'moment';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TimeDto } from '../timeDto';

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
  timer: string;
  setIntervalTimer;
  timeFromApi: TimeDto;

  clockIn(): void {
    this.apiService.postClockIn().subscribe(
      (response) => {
        console.log(response);
        this.responseStatusClockIn = response.status;
        this.clockInDateFromApi = response.body;
        this.startTimerIfUserInWork();
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
        console.log(response);
        this.responseStatusClockOut = response.status;
        this.clockOutDateFromApi = response.body;
        clearInterval(this.setIntervalTimer);
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
    // this.startTimerIfUserInWork();
  }

  startTimerIfUserInWork() {
    this.apiService
      .getLastClockInTime()
      .subscribe((data) => (this.timeFromApi = data));
    var apiTime = moment(this.timeFromApi.myTime);

    this.setIntervalTimer = setInterval(() => {
      var actualDate = moment(new Date());
      let diff = actualDate.diff(apiTime);
      this.timer = moment.utc(diff).format('HH:mm:ss');
    }, 1000);
  }
}
