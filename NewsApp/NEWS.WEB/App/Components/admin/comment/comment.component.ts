import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../Service/admin.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { IComment } from '../../../Models/comment';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';
import { BsModalComponent } from 'ng2-bs3-modal';
import { DBOperation } from '../../../Shared/enum';


@Component({
    templateUrl: '/App/Components/admin/comment/comment.component.html'
})
export class CommentComponent implements  OnInit {

    comments: IComment[];
    comment: IComment;
    msg: string;
    indLoading: boolean = false;
    @ViewChild('modal') modal: BsModalComponent;
    dbops: DBOperation;
    commentFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _adminService: AdminService) { }

    ngOnInit(): void {
        this.commentFrm = this.fb.group({
            CommentId: [''],
            Content: [''],
            Poster: [''],
            PostedTime: [''],
            ParentId: [''],
            Status: [''],
        });

        this.LoadComments();
    }
    LoadComments() {
        this.indLoading = true;
        this._adminService.get(Global.BASE_COMMENT_ENDPOINT)
            .subscribe(res => { this.comments = res, this.indLoading = false; },
            error => this.msg = <any>error);
    }

    detailComments(id: number) {
        this.SetControlsState(false);
        this.modalTitle = "Detail Comment";
        this.modalBtnTitle = "";
        this.comment = this.comments.filter(x => x.CommentId == id)[0];
        this.commentFrm.setValue(this.comment);
        this.modal.open();
    }

    
  
    SetControlsState(isEnable: boolean) {
        isEnable ? this.commentFrm.enable() : this.commentFrm.disable();
    }

}