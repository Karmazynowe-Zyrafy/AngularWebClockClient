import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClockInOutHistoryComponent } from './clock-in-out-history/clock-in-out-history.component';
import { InOutTransformPipe } from './in-out-transform.pipe';

@NgModule({
  declarations: [AppComponent, NavbarComponent, DashboardComponent, ClockInOutHistoryComponent, InOutTransformPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
