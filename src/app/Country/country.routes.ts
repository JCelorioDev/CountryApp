import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { ByCapitalComponent } from './Pages/by-capital/by-capital.component';
import { ByRegionComponent } from './Pages/by-region/by-region.component';
import { ByCountrieComponent } from './Pages/by-countrie/by-countrie.component';

export default [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: SidebarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'capital',
        component: ByCapitalComponent
      },
      {
        path: 'countrie',
        component: ByCountrieComponent
      },
      {
        path: 'region',
        component: ByRegionComponent
      }
    ]
  }
] as Routes;
