import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside.component';
import { CategoryComponent } from '../category/category.component';
import { NewsComponent } from '../news/news.component';
import { AccountComponent } from '../account/account.component';
import { PermissionComponent } from '../permission/permission.component';
import { CommentComponent } from '../comment/comment.component';
import { FeedbackComponent } from '../feedback/feedback.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AsideComponent },
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
export class AsideRoutingModule { }