import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './Components/admin/category/category.component';
import { NewsComponent } from './Components/admin/news/news.component';
import { AccountComponent } from './Components/admin/account/account.component';
import { PermissionComponent } from './Components/admin/permission/permission.component';
import { CommentComponent } from './Components/admin/comment/comment.component';
import { FeedbackComponent } from './Components/admin/feedback/feedback.component';
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
            { path: 'home/category', component: CategoryComponent },
            { path: 'home/news', component: NewsComponent },
            { path: 'home/account', component: AccountComponent },
            { path: 'home/permission', component: PermissionComponent },
            { path: 'home/comment', component: CommentComponent },
            { path: 'home/feedback', component: FeedbackComponent },
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }