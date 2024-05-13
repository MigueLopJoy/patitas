import { Routes } from "@angular/router";
import { AnimalsHomeComponent } from "./animals-home/animals-home.component";

export const ANIMALS_ROUTES: Routes = [
    {
        path: '', component: AnimalsHomeComponent
    },
    {
        path: 'adopciones', loadChildren: () => import('./adoptions/adoptions.routes').then(c => c.ADOPTIONS_ROUTES)
    },
    {
        path: 'acogidas', loadChildren: () => import('./fosters/fosters.routes').then(c => c.FOSTERS_ROUTES)
    },
    {
        path: 'urgencias', loadChildren: () => import('./urgencies/urgencies.routes').then(c => c.URGENCIES_ROUTES)
    }
]