import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../Service/admin.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { IPermission } from '../../../Models/permission';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';
import { BsModalComponent } from 'ng2-bs3-modal';
import { DBOperation } from '../../../Shared/enum';


@Component({
    templateUrl: '/App/Components/admin/permission/permission.component.html'
})
export class PermissionComponent implements OnInit {

    permissions: IPermission[];
    permission: IPermission;
    msg: string;
    indLoading: boolean = false;
    @ViewChild('modal') modal: BsModalComponent;
    dbops: DBOperation;
    permissionFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _adminService: AdminService) { }

    ngOnInit(): void {
        this.permissionFrm = this.fb.group({
            Id: [''],
            PermissionName: [''],
            Status: [''],
        });

        this.LoadPermissions();
    }
    LoadPermissions() {
        this.indLoading = true;
        this._adminService.get(Global.BASE_PERMISSION_ENDPOINT)
            .subscribe(res => { this.permissions = res, this.indLoading = false; },
            error => this.msg = <any>error);
    }
    addPermissions() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Permission";
        this.modalBtnTitle = "Add";
        this.permissionFrm.reset();
        this.modal.open();
    }

    editPermissions(id: number) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Permission";
        this.modalBtnTitle = "Update";
        this.permission = this.permissions.filter(x => x.Id == id)[0];
        this.permissionFrm.setValue(this.permission);
        this.modal.open();
    }

    deletePermissions(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.permission = this.permissions.filter(x => x.Id == id)[0];
        this.permissionFrm.setValue(this.permission);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._adminService.post(Global.BASE_PERMISSION_ENDPOINT, formData.value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadPermissions();
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
                this._adminService.put(Global.BASE_PERMISSION_ENDPOINT, formData.value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadPermissions();
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
                this._adminService.delete(Global.BASE_PERMISSION_ENDPOINT, formData.value.Id).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadPermissions();
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
        isEnable ? this.permissionFrm.enable() : this.permissionFrm.disable();
    }

}