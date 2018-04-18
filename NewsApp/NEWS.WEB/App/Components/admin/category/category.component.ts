import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../../Service/category.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ICategory } from '../../../Models/category';
//import { commondisplay } from "../../../Shared/commondisplay";
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';
//import { filter } from 'rxjs/operator/filter';
//import { debounce } from 'rxjs/operator/debounce';
//import { elementAt } from 'rxjs/operator/elementAt';
//import { debug } from 'util';

@Component({
    templateUrl: '/App/Components/admin/category/category.component.html'
})
export class CategoryComponent implements OnInit {

    categories: ICategory[];
    msg: string;
    indLoading: boolean = false;

    constructor(private _categoryService: CategoryService) { }

    ngOnInit(): void {
        this.LoadCategories();
    }
    LoadCategories() {
        this.indLoading = true;   
        this._categoryService.get(Global.BASE_CATEGORY_ENDPOINT)
            .subscribe(res => { this.categories = res, console.log(res) },
            error => this.msg = <any>error);
    }
}