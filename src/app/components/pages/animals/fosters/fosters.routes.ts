import { Routes } from "@angular/router";
import { FostersComponent } from "./fosters.component";
import { AnimalDetailsComponent } from "../../../shared/animal-details/animal-details.component";

export const FOSTERS_ROUTES: Routes = [
    {
        path: '', component: FostersComponent
    },
    {
        path: ':slug', component: AnimalDetailsComponent
    }
]