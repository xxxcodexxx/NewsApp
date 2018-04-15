import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home/category', component: CategoryComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);