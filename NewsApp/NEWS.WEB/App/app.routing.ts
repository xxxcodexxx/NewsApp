import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './Components/admin/category/category.component';
import { HomeComponent } from './components/home.component';

//const appRoutes: Routes = [
//    { path: '', redirectTo: 'home', pathMatch: 'full' },
//    { path: 'home', component: HomeComponent },
//    { path: 'home/category', component: CategoryComponent }
//];

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'home/category', component: CategoryComponent }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }