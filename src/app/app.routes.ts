import { Routes } from '@angular/router';
import { SidebarComponent } from './Country/Components/sidebar/sidebar.component';
import { NotFoundError } from 'rxjs';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./Country/country.routes')
    },
    {
        path: '**',
        component: NotFoundError
    }
];
