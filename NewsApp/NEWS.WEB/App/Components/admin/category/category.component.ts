import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../../Service/category.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ICategory } from '../../../Models/category';
import { BsModalComponent } from 'ng2-bs3-modal';
import { DBOperation } from '../../../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';

@Component({
    templateUrl: '/App/Components/admin/category/category.component.html'
})
export class CategoryComponent implements OnInit {

    categories: ICategory[];
    category: ICategory;
    msg: string;
    indLoading: boolean = false;
    @ViewChild('modal') modal: BsModalComponent;
    dbops: DBOperation;
    categoryFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder,private _categoryService: CategoryService) { }

    ngOnInit(): void {
        this.categoryFrm = this.fb.group({
            CategoryId: [''],
            CategoryName: ['', Validators.required],
            ParentId: [''],
            Status: ['']
        });

        this.LoadCategories();
    }
    LoadCategories() {
        this.indLoading = true;   
        this._categoryService.get(Global.BASE_CATEGORY_ENDPOINT)
            .subscribe(res => { this.categories = res, this.indLoading = false; },
            error => this.msg = <any>error);
    }
    addCategory() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Category";
        this.modalBtnTitle = "Add";
        this.categoryFrm.reset();
        this.modal.open();
    }

    editCategory(id: number) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Category";
        this.modalBtnTitle = "Update";
        this.category = this.categories.filter(x => x.Id == id)[0];
        this.categoryFrm.setValue(this.category);
        this.modal.open();
    }

    deleteCategory(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.category = this.categories.filter(x => x.Id == id)[0];
        this.categoryFrm.setValue(this.category);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._categoryService.post(Global.BASE_CATEGORY_ENDPOINT, formData.value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadCategories();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._categoryService.put(Global.BASE_CATEGORY_ENDPOINT, formData.value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadCategories();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this._categoryService.delete(Global.BASE_CATEGORY_ENDPOINT, formData.value.CategoryId).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadCategories();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;

        }
    }
    SetControlsState(isEnable: boolean) {
        isEnable ? this.categoryFrm.enable() : this.categoryFrm.disable();
    }

}