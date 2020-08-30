import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BalanceDto } from '../balanceDto';
import * as moment from 'moment';
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
  workStatus: number;
  clockInTimeFromApi;
  setIntervalTimer;
  timer;
  clockIn(): void {
    this.apiService.postClockIn().subscribe(
      (response) => {
        this.responseStatusClockIn = response.status;
        this.clockInDateFromApi = response.body;
        this.apiService
          .getWorkStatus()
          .subscribe((data) => (this.workStatus = data));
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
        this.responseStatusClockOut = response.status;
        this.clockOutDateFromApi = response.body;
        this.apiService
          .getWorkStatus()
          .subscribe((data) => (this.workStatus = data));
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
    this.apiService
      .getWorkStatus()
      .subscribe((data) => (this.workStatus = data));

    this.startTimerIfUserInWork();
  }
  startTimerIfUserInWork(): void {
    this.apiService.getLastClockInTime().subscribe((response) => {
      this.clockInTimeFromApi = response.body;
      console.log(this.clockInTimeFromApi);

      if (this.clockInTimeFromApi == undefined) {
        return;
      }
      this.countTimeDiff();
      this.setIntervalTimer = setInterval(() => {
        this.countTimeDiff();
      }, 1000);
    });
  }
  countTimeDiff(): void {
    var actualDate = moment(new Date()).hour(-6);
    let diff = actualDate.diff(this.clockInTimeFromApi);
    this.timer = moment(diff).format('HH:mm:ss');
  }
}
