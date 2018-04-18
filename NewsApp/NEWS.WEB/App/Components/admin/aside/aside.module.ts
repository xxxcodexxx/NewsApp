import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AsideComponent } from "./aside.component";
import { AsideRoutingModule } from "./aside-routing";
@NgModule({
    imports: [
        CommonModule,
        AsideRoutingModule
    ],
    declarations: [AsideComponent],
    exports: [AsideComponent]
})
export class AsideModule { }