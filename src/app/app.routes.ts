import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/inicio', pathMatch: 'full'
    }, 
    {
        path: 'inicio', component: HomeComponent
    }, 
    {
        path: 'mascotas', loadChildren: () => import('./components/pages/animals/animals.routes').then(c => c.ANIMALS_ROUTES)
    },
    {
        path: 'colaborar', loadChildren: () => import('./components/pages/collaborate/collaborate.routes').then(c => c.COLLABORATE_ROUTES)
    },
    {
        path: 'contacto', component: ContactComponent
    },
    {
        path: 'conocenos', component: AboutComponent
    }
];
