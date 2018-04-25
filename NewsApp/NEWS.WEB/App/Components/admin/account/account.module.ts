import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountComponent } from "./account.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms'
import { BsModalModule } from 'ng2-bs3-modal';



@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, BsModalModule,
        RouterModule.forChild([
            { path: '', component: AccountComponent }
        ])
    ],
    declarations: [AccountComponent],
    exports: [RouterModule]
})

export class AccountModule { }