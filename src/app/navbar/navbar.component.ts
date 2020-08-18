import {Component} from '@angular/core';
import {Navbar} from './dtos';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    logo: string;
    navBarArray: Navbar[];

    constructor() {
        this.logo = 'assets/imags/rekordlogo.png';
        this.navBarArray = [
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

}
