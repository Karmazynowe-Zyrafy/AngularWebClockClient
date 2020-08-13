import {Component} from '@angular/core';
import {DataService} from './data.service';
import {Clock} from './clock.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private  dataService: DataService) {
    }
}