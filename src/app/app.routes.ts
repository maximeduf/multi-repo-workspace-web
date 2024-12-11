import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DocsComponent } from './pages/docs/docs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
