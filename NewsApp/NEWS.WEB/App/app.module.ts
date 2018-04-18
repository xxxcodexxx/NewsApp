﻿import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
//import { CategoryComponent } from './components/admin/category/category.component';
import { HomeComponent } from './components/home.component';
import { CategoryService } from './Service/category.service';
import { AsideComponent } from './Components/admin/aside/aside.component';
import { RightAsideComponent } from './Components/admin/aside-right/aside-right.component';
import { FooterComponent } from './Components/admin/app-footer/app-footer.component';
import { MainHeaderModule } from './Components/admin/main-header/main-header.module';
import { AsideModule } from './Components/admin/aside/aside.module';
import { RightAsideModule } from './Components/admin/aside-right/aside-right.module';
import { FooterModule } from './Components/admin/app-footer/app-footer.module';
import { CategoryModule } from './Components/admin/category/category.module';
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
        CategoryModule
    ],
    declarations: [AppComponent, HomeComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, CategoryService],
    bootstrap: [AppComponent]

})
export class AppModule { }
