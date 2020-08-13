import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    logo;
    navbarArry;

    constructor() {
        this.logo = 'assets/imags/rekordlogo.png';
        this.navbarArry = [
            {
                link: '#',
                icon: 'home',
                text: 'Strona Główna',
            },
            {
                link: '#',
                icon: 'calendar_today',
                text: 'Historia',
            },
            {
                link: '#',
                icon: 'contact_support',
                text: 'Informacje',
            },
            {
                link: '#',
                icon: 'power_settings_new',
                text: 'Wyloguj',
            },
        ];
    }

    ngOnInit(): void {
    }
}
