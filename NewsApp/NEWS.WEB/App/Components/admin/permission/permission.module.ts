import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PermissionComponent } from "./permission.component";
import { RouterModule } from "@angular/router";



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: PermissionComponent }
        ])
    ],
    declarations: [PermissionComponent],
    exports: [RouterModule]
})

export class PermissionModule { }