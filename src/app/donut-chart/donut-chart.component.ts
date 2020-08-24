import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { BalanceDto } from '../balanceDto';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
}
