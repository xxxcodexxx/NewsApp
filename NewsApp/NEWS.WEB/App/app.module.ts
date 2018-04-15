import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { CategoryComponent } from './components/category.component';
import { HomeComponent } from './components/home.component';
import { CategoryService } from './Service/category.service';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations: [AppComponent, CategoryComponent, HomeComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, CategoryService],
    bootstrap: [AppComponent]

})
export class AppModule { }
