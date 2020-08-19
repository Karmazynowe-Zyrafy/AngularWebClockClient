import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  clockInUrl = 'https://localhost:44385/api/ClockInOut/ClockIndad/';
  id = 6;
  public PostClockIn(): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(this.clockInUrl + this.id, null, {
      observe: 'response',
    });
  }
}
