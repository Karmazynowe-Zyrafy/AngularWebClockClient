import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BalanceDto } from '../balanceDto';
import { ClockInOutDto } from '../clockInOutDto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  id = 1;
  baseUrl = 'https://recordwebclock.azurewebsites.net/api';
  clockInUrl = `${this.baseUrl}/ClockInOut/ClockIn/`;
  clockOutUrl = `${this.baseUrl}/ClockInOut/ClockOut/`;
  balanceUrl = `${this.baseUrl}/ClockInOut/Balance/`;
  workStatusUrl = `${this.baseUrl}/ClockInOut/WorkStatus/`;
  BalanceToThisDayUrl = `${this.baseUrl}/ClockInOut/BalanceToThisDay/`;
  clockInOutHistory = `${this.baseUrl}/ClockInOut/History/`;
  constructor(private http: HttpClient) {}

  public postClockIn(): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(this.clockInUrl + this.id, null, {
      observe: 'response',
    });
  }
  public postClockOut(): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(this.clockOutUrl + this.id, null, {
      observe: 'response',
    });
  }
  getBalance(): Observable<BalanceDto> {
    return this.http.get<BalanceDto>(this.balanceUrl + this.id);
  }
  getBalanceToThisDay(): Observable<BalanceDto> {
    return this.http.get<BalanceDto>(this.BalanceToThisDayUrl + this.id);
  }
  getClockInOutHistory(): Observable<ClockInOutDto[]> {
    return this.http.get<ClockInOutDto[]>(this.clockInOutHistory + 1);
  }
  getWorkStatus(): Observable<number> {
    return this.http.get<number>(this.workStatusUrl + 1);
  }
}
