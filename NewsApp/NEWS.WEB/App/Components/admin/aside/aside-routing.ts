import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside.component';
import { CategoryComponent } from '../category/category.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AsideComponent },
            { path: 'home/category', component: CategoryComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AsideRoutingModule { }