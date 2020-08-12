import {Component, OnInit, DoCheck} from '@angular/core';
import {DataService} from './data.service';
import {Clock} from './clock.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements  OnInit, DoCheck*/ {
  clock$: Clock;
  constructor( private  dataService: DataService) {}

  // ngDoCheck() {
  //
  //   console.log('test1' + this.dataService.getClock()) ;
  //
  //   return this.dataService.getClock().subscribe(data => this.clock$ = data);
  // }
 /* ngOnInit() {

    console.log('test1' + this.dataService.getClock()) ;

    return this.dataService.getClock().subscribe(data => this.clock$ = data);
  }*/

}
