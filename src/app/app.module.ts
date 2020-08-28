import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClockInOutHistoryComponent} from './clock-in-out-history/clock-in-out-history.component';
import {InOutTransformPipe} from './in-out-transform.pipe';
import {DonutChartComponent} from './donut-chart/donut-chart.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MakePositivePipe} from './make-positive.pipe';

import localePl from '@angular/common/locales/pl';

import {registerLocaleData} from '@angular/common';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import { RemoveWhiteSpacePipe } from './remove-white-space.pipe';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClockInOutHistoryComponent,
    InOutTransformPipe,
    DonutChartComponent,
    PageNotFoundComponent,
    MakePositivePipe,
    RemoveWhiteSpacePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }],

  bootstrap: [AppComponent],
})
export class AppModule {}
