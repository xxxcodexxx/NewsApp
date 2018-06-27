import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../Service/admin.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Http, RequestOptions, Headers, Response } from '@angular/http';  
import { INews } from '../../../Models/new';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';
import { BsModalComponent } from 'ng2-bs3-modal';
import { DBOperation } from '../../../Shared/enum';
import { ICategory } from '../../../Models/category';


@Component({
    templateUrl: '/App/Components/admin/news/news.component.html'
})
export class NewsComponent implements OnInit {

    news: INews[];
    category: ICategory[];
    new: INews;
    msg: string;
    indLoading: boolean = false;
    @ViewChild('modal') modal: BsModalComponent;
    dbops: DBOperation;
    newFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;
    private isUploadBtn: boolean = true;  

    constructor(private fb: FormBuilder, private _adminService: AdminService, private http: Http) { }

    ngOnInit(): void {
        this.newFrm = this.fb.group({
            NewsId: [''],
            Title: ['', Validators.required],
            Description: [''],
            Content: [''],
            Image: [''],
            Status:[''],
            CategoryId: [''],
            CreatedTime:[''],
            ModifiedTime: [''],
            CreateBy: [''],
            ModifiedBy: [''],
            Author: [''],
            ViewCount:[''],
            Tags: [''],
            CategoryName:['']
        });
        this.loadCategory();
        this.LoadNews();
    }
    LoadNews() {
        this.indLoading = true;
        this._adminService.get(Global.BASE_NEWS_ENDPOINT)
            .subscribe(res => { this.news = res, this.indLoading = false, this.LoadParentCategory(this.news)},
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
    loadCategory() {
        this._adminService.get(Global.BASE_CATEGORY_ENDPOINT)
            .subscribe(res => { this.category = res},
            error => this.msg = <any>error);
    }

    LoadParentCategory(item: INews[]) {
        item.forEach((val) => {
            this.category.forEach((value) => {
                if (val.CategoryId == value.CategoryId) {
                    val.CategoryName = value.CategoryName;
                }
                if (val.CategoryId == 0) {
                    val.CategoryName = "";
                }
            })
        })
    }
    editNew(id: number) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit New";
        this.modalBtnTitle = "Update";
        this.new = this.news.filter(x => x.NewsId == id)[0];
        if (this.new.CategoryId == 0)
            this.new.CategoryId = null;
        this.newFrm.setValue(this.new);
        this.modal.open();
    }

    deleteNew(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.new = this.news.filter(x => x.NewsId == id)[0];
        this.newFrm.setValue(this.new);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._adminService.post(Global.BASE_NEWS_ENDPOINT, formData.value).subscribe(
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
                this._adminService.put(Global.BASE_NEWS_ENDPOINT, formData.value).subscribe(
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
                this._adminService.delete(Global.BASE_NEWS_ENDPOINT, formData.value.NewsId).subscribe(
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

    fileChange(event :any) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers()
            //headers.append('Content-Type', 'json');  
            //headers.append('Accept', 'application/json');  
            let options = new RequestOptions({ headers: headers });
            let apiUrl1 = "/api/UploadFileApi";
            this.http.post(apiUrl1, formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                data => console.log('success'),
                error => console.log(error)
                )
        }
        window.location.reload();
    }  
}