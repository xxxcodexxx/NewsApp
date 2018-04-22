import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RightAsideComponent } from "./aside-right.component";

@NgModule({
    imports: [CommonModule],
    declarations: [RightAsideComponent],
    exports: [RightAsideComponent]
})
export class RightAsideModule { }