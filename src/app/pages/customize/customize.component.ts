import { Component } from '@angular/core';
import { LinksComponent } from '../../components/customize/links/links.component';
import { ProfileComponent } from '../../components/customize/profile/profile.component';
import { SharedModule } from '../../components/shared/shared.module';

@Component({
  selector: 'app-customize',
  standalone: true,
  imports: [SharedModule, LinksComponent, ProfileComponent],
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.scss'
})
export class CustomizeComponent {

}
