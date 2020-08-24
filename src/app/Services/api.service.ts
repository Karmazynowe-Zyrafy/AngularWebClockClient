import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BalanceDto } from '../balanceDto';
import { ClockInOutDto } from '../clockInOutDto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  id = 6;
  baseUrl = 'https://localhost:44385/api';
  clockInUrl = this.baseUrl + '/ClockInOut/ClockIn/';
  clockOutUrl = this.baseUrl + '/ClockInOut/ClockOut/';
  balanceUrl = this.baseUrl + '/ClockInOut/Balance/';
  clockInOutHistory = this.baseUrl + '/ClockInOut/History/';
  BalanceToThisDayUrl = this.baseUrl + '/ClockInOut/BalanceToThisDay/';
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
    // return this.http.get<BalanceDto>(this.balanceUrl + this.id);
    return this.http.get<BalanceDto>(this.BalanceToThisDayUrl + 1);
  }
  getClockInOutHistory(): Observable<ClockInOutDto[]> {
    return this.http.get<ClockInOutDto[]>(this.clockInOutHistory + 1);
  }
}
