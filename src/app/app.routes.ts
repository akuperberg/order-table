import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full'},
    { path: 'orders', component: LayoutComponent },
];
