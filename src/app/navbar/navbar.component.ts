import { Component, OnInit } from '@angular/core';
import {Clock} from '../clock.model';
declare var require: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  $logo;
  constructor() {
    this.$logo = 'assets/imags/rekordlogo.png'; }
  ngOnInit(): void {
  }

}
