import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ClockInOutDto } from '../clockInOutDto';

@Component({
  selector: 'app-clock-in-out-history',
  templateUrl: './clock-in-out-history.component.html',
  styleUrls: ['./clock-in-out-history.component.css'],
})
export class ClockInOutHistoryComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  clockInOutData: ClockInOutDto[];
  ClockInData: ClockInOutDto[];

  ngOnInit() {
    this.apiService
      .getClockInOutHistory()
      .subscribe((data) => (this.clockInOutData = data));
    this.ClockInData = this.clockInOutData.filter(
      (ClockIn) => ClockIn.type === 1
    );
  }
}
