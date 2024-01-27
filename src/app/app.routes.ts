import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full'},
    { path: 'orders', component: LayoutComponent },
];
