import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../Service/admin.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { INew } from '../../../Models/new';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';
import { BsModalComponent } from 'ng2-bs3-modal';
import { DBOperation } from '../../../Shared/enum';


@Component({
    templateUrl: '/App/Components/admin/news/news.component.html'
})
export class NewsComponent implements OnInit {

    news: INew[];
    new: INew;
    msg: string;
    indLoading: boolean = false;
    @ViewChild('modal') modal: BsModalComponent;
    dbops: DBOperation;
    newFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _adminService: AdminService) { }

    ngOnInit(): void {
        this.newFrm = this.fb.group({
            ID: [''],
            Title: ['', Validators.required],
            Description: [''],
            Content: [''],
            Image: [''],
            CategoryId: [''],
            Status: [''],
            CreatedTime: [''],
            ModifiedTime: [''],
            CreateBy: [''],
            ModifiedBy: [''],
            Author: [''],
            ViewCount: [''],
            Tags: [''],
        });

        this.LoadNews();
    }
    LoadNews() {
        this.indLoading = true;
        this._adminService.get(Global.BASE_CATEGORY_ENDPOINT)
            .subscribe(res => { this.news = res, this.indLoading = false; },
            error => this.msg = <any>error);
    }
    addNew() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New ";
        this.modalBtnTitle = "Add";
        this.newFrm.reset();
        this.modal.open();
    }

    editNew(id: number) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit New";
        this.modalBtnTitle = "Update";
        this.new = this.news.filter(x => x.Id == id)[0];
        this.newFrm.setValue(this.new);
        this.modal.open();
    }

    deleteNew(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.new = this.news.filter(x => x.Id == id)[0];
        this.newFrm.setValue(this.new);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._adminService.post(Global.BASE_CATEGORY_ENDPOINT, formData.value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadNews();
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
                this._adminService.put(Global.BASE_CATEGORY_ENDPOINT, formData.value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadNews();
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
                this._adminService.delete(Global.BASE_CATEGORY_ENDPOINT, formData.value.CategoryId).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadNews();
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
        isEnable ? this.newFrm.enable() : this.newFrm.disable();
    }
}