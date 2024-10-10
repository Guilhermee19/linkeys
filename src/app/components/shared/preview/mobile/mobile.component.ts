import { Component } from '@angular/core';
import { PreviewComponent } from '../../../../pages/preview/preview.component';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [PreviewComponent],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent {

}
