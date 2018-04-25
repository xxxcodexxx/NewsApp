import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../Service/admin.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { IFeedback } from '../../../Models/feedback';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';
import { BsModalComponent } from 'ng2-bs3-modal';
import { DBOperation } from '../../../Shared/enum'


@Component({
    templateUrl: '/App/Components/admin/feedback/feedback.component.html'
})
export class FeedbackComponent implements OnInit {

    feedbacks: IFeedback[];
    feedback: IFeedback;
    msg: string;
    indLoading: boolean = false;
    @ViewChild('modal') modal: BsModalComponent;
    dbops: DBOperation;
    feedbackFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _adminService: AdminService) { }

    ngOnInit(): void {
        this.feedbackFrm = this.fb.group({
            Id: [''],
            Content: [''],
            FullName: [''],
            Email: [''],
            SendedTime: [''],
            Status: [''],
        });

        this.LoadFeedbacks();
    }
    LoadFeedbacks() {
        this.indLoading = true;
        this._adminService.get(Global.BASE_FEEDBACK_ENDPOINT)
            .subscribe(res => { this.feedbacks = res, this.indLoading = false; },
            error => this.msg = <any>error);
    }

    detailFeedbacks(id: number) {
        this.SetControlsState(false);
        this.modalTitle = "Detail Feedback";
        this.modalBtnTitle = "";
        this.feedback = this.feedbacks.filter(x => x.Id == id)[0];
        this.feedbackFrm.setValue(this.feedback);
        this.modal.open();
    }



    SetControlsState(isEnable: boolean) {
        isEnable ? this.feedbackFrm.enable() : this.feedbackFrm.disable();
    }

}