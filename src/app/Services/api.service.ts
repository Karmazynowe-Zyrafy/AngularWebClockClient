import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BalanceDto } from '../balanceDto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  id = 1;
  baseUrl = 'https://localhost:44385/api';
  clockInUrl = this.baseUrl + '/ClockInOut/ClockIn/';
  clockOutUrl = this.baseUrl + '/ClockInOut/ClockOut/';
  balanceUrl = this.baseUrl + '/ClockInOut/Balance/';
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
    return this.http.get<BalanceDto>(this.balanceUrl + this.id);
  }
  getBalanceToThisDay(): Observable<BalanceDto> {
    return this.http.get<BalanceDto>(this.BalanceToThisDayUrl + this.id);
  }
}
