import { Component } from '@angular/core';
import { LinksComponent } from '../../components/customize/links/links.component';
import { ProfileComponent } from '../../components/customize/profile/profile.component';

@Component({
  selector: 'app-customize',
  standalone: true,
  imports: [LinksComponent, ProfileComponent],
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.scss'
})
export class CustomizeComponent {

}
