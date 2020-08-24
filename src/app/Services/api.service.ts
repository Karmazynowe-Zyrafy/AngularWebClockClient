import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BalanceDto } from '../balanceDto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  id = 6;
  clockInUrl = 'https://localhost:44385/api/ClockInOut/ClockIn/';
  clockOutUrl = 'https://localhost:44385/api/ClockInOut/ClockOut/';
  balanceUrl = 'https://localhost:44385/api/ClockInOut/Balance/';
  BalanceToThisDayUrl =
    'https://localhost:44385/api/ClockInOut/BalanceToThisDay/';
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
}
