import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountComponent } from "./account.component";
import { RouterModule } from "@angular/router";



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: AccountComponent }
        ])
    ],
    declarations: [AccountComponent],
    exports: [RouterModule]
})

export class AccountModule { }