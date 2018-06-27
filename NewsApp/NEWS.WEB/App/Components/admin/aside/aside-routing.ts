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
            { path: 'category', component: CategoryComponent },
            { path: 'news', component: NewsComponent },
            { path: 'account', component: AccountComponent },
            { path: 'role', component: PermissionComponent },
            { path: 'comment', component: CommentComponent },

        ])
    ],
    exports: [RouterModule]
})
export class AsideRoutingModule { }