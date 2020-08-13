import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {from} from 'rxjs';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}