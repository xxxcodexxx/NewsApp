import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PermissionComponent } from "./permission.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { BsModalModule } from 'ng2-bs3-modal';


@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, BsModalModule,
        RouterModule.forChild([
            { path: '', component: PermissionComponent }
        ])
    ],
    declarations: [PermissionComponent],
    exports: [RouterModule]
})

export class PermissionModule { }