import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewComponent } from './pages/preview/preview.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'link-sharing-app';
}
