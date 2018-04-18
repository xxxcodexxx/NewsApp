import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsComponent } from "./news.component";
import { RouterModule } from "@angular/router";



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: NewsComponent }
        ])
    ],
    declarations: [NewsComponent],
    exports: [RouterModule]
})

export class NewsModule { }