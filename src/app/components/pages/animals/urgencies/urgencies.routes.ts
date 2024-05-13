import { Routes } from "@angular/router";
import { UrgenciesComponent } from "./urgencies.component";
import { AnimalDetailsComponent } from "../../../shared/animal-details/animal-details.component";

export const URGENCIES_ROUTES: Routes = [
    {
        path: '', component: UrgenciesComponent
    },
    {
        path: ':slug', component: AnimalDetailsComponent
    }
]