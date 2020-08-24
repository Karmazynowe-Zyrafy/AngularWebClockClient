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

  errorClockIn: number;
  errorClockOut: number;
  balanceData: BalanceDto;

  clockIn(): void {
    this.apiService.postClockIn().subscribe(
      (response) => {
        console.log(response);
        this.errorClockIn = response.status;
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
        this.errorClockOut = response.status;
      },
      (error: HttpErrorResponse) => {
        this.errorClockOut = error.status;
      }
    );
  }

  ngOnInit() {
    console.log('test1' + this.apiService.getBalance());
    return this.apiService
      .getBalance()
      .subscribe((data) => (this.balanceData = data));
  }
}
