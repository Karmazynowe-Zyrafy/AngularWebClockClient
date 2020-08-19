import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
    export class ApiService {
    constructor(private http: HttpClient) {}
    clockInUrl = 'https://localhost:44385/api/ClockInOut/ClockIn/';
    id = 6;

    public PostClockIn(): void {
        console.log('services');
        this.http.post(this.clockInUrl + this.id, null).subscribe(res => console.log(res));
        }


}
