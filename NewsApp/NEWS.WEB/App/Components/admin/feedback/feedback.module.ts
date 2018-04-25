import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedbackComponent } from "./feedback.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { BsModalModule } from 'ng2-bs3-modal';


@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, BsModalModule,
        RouterModule.forChild([
            { path: '', component: FeedbackComponent }
        ])
    ],
    declarations: [FeedbackComponent],
    exports: [RouterModule]
})

export class FeedbackModule { }