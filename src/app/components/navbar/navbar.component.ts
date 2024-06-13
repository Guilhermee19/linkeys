import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVBAR_PAGES } from '../../constants/navbar';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarPages = NAVBAR_PAGES;
}
