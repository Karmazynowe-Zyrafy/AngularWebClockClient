import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BalanceDto } from '../balanceDto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  id: number;
  clockInUrl: string;
  clockOutUrl: string;
  balanceUrl: string;
  BalanceToThisDayUrl: string;
  constructor(private http: HttpClient) {
    this.clockInUrl = 'https://localhost:44385/api/ClockInOut/ClockIn/';
    this.clockOutUrl = 'https://localhost:44385/api/ClockInOut/ClockOut/';
    this.balanceUrl = 'https://localhost:44385/api/ClockInOut/Balance/';
    this.BalanceToThisDayUrl =
      'https://localhost:44385/api/ClockInOut/BalanceToThisDay/';
    this.id = 1;
  }

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
    //  return this.http.get<BalanceDto>(this.balanceUrl + this.id);
    return this.http.get<BalanceDto>(this.BalanceToThisDayUrl + this.id);
  }
}
