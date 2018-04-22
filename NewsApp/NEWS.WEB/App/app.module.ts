import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home.component';
import { AdminService } from './Service/admin.service';
import { MainHeaderModule } from './Components/admin/main-header/main-header.module';
import { AsideModule } from './Components/admin/aside/aside.module';
import { RightAsideModule } from './Components/admin/aside-right/aside-right.module';
import { FooterModule } from './Components/admin/app-footer/app-footer.module';
import { CategoryModule } from './Components/admin/category/category.module';
import { NewsModule } from './Components/admin/news/news.module';
import { AccountModule } from './Components/admin/account/account.module';
import { PermissionModule} from './Components/admin/permission/permission.module';
import { CommentModule } from './Components/admin/comment/comment.module';
import { FeedbackModule } from './Components/admin/feedback/feedback.module';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        MainHeaderModule,
        AsideModule,
        RightAsideModule,
        FooterModule,
        CategoryModule,
        NewsModule,
        AccountModule,
        PermissionModule,
        CommentModule,
        FeedbackModule
    ],
    declarations: [AppComponent, HomeComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/admin' }, AdminService],
    bootstrap: [AppComponent]

})
export class AppModule { }
