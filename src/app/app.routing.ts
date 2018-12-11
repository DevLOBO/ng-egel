import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ExamenComponent } from './components/examen/examen.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'examen/:area', component: ExamenComponent },
    { path: '**', redirectTo: '' }
];