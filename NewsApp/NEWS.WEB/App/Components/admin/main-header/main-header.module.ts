import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainHeaderComponent } from "./main-header.component";
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MainHeaderComponent],
    exports: [MainHeaderComponent]
})
export class MainHeaderModule { }