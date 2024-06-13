import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomizeComponent } from './pages/customize/customize.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'custom',
        component: CustomizeComponent
      },
      {
        path: 'profile',
        component: CustomizeComponent
      },
      { path: '**', redirectTo: 'custom' },
    ]
  },
];
