import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../Service/admin.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { IAccount } from '../../../Models/account';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';
import { BsModalComponent } from 'ng2-bs3-modal';
import { DBOperation } from '../../../Shared/enum';

@Component({
    templateUrl: '/App/Components/admin/account/account.component.html'
})
export class AccountComponent implements OnInit {

    accounts: IAccount[];
    account: IAccount;
    msg: string;
    indLoading: boolean = false;
    @ViewChild('modal') modal: BsModalComponent;
    dbops: DBOperation;
    accountFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _adminService: AdminService) { }

    ngOnInit(): void {
        this.accountFrm = this.fb.group({
            UserName: [''],
            Password: [''],
            FullName: [''],
            Email: [''],
            Phone: [''],
            PermissionId: [''],
            Status: [''],
        });

        this.LoadAccounts();
    }
    LoadAccounts() {
        this.indLoading = true;
        this._adminService.get(Global.BASE_ACCOUNT_ENDPOINT)
            .subscribe(res => { this.accounts = res, this.indLoading = false; },
            error => this.msg = <any>error);
    }
    addAccounts() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Account";
        this.modalBtnTitle = "Add";
        this.accountFrm.reset();
        this.modal.open();
    }

    editAccounts(username: string) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Account";
        this.modalBtnTitle = "Update";
        this.account = this.accounts.filter(x => x.UserName == username)[0];
        this.accountFrm.setValue(this.account);
        this.modal.open();
    }

    deleteAccounts(username: string) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.account = this.accounts.filter(x => x.UserName == username)[0];
        this.accountFrm.setValue(this.account);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._adminService.post(Global.BASE_ACCOUNT_ENDPOINT, formData.value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadAccounts();
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
                this._adminService.put(Global.BASE_ACCOUNT_ENDPOINT, formData.value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadAccounts();
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
                this._adminService.delete(Global.BASE_ACCOUNT_ENDPOINT, formData.value.UserName).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadAccounts();
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
        isEnable ? this.accountFrm.enable() : this.accountFrm.disable();
    }

}