import { Routes } from "@angular/router";
import { AnimalInfoComponent } from "../../../shared/animal-info/animal-info.component";
import { AdoptionsComponent } from "./adoptions.component";

export const ADOPTIONS_ROUTES: Routes = [
    {
        path: '', component: AdoptionsComponent
    },
    {
        path: ':slug', component: AnimalInfoComponent
    }
]