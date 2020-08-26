import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { BalanceDto } from '../balanceDto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  balanceData: BalanceDto;
  hoursToWorkInMonth: number = 160;
  workedPercent: number;

  ngOnInit() {
    this.apiService.getBalance().subscribe((data) => (this.balanceData = data));

    this.workedPercent = this.workedPercent =
      (this.balanceData.hoursWorked * 100) / this.hoursToWorkInMonth;

    return;
  }
}
