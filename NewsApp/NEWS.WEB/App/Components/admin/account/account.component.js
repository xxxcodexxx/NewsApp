"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var admin_service_1 = require("../../../Service/admin.service");
var forms_1 = require("@angular/forms");
var global_1 = require("../../../Shared/global");
var ng2_bs3_modal_1 = require("ng2-bs3-modal");
var enum_1 = require("../../../Shared/enum");
var AccountComponent = /** @class */ (function () {
    function AccountComponent(fb, _adminService) {
        this.fb = fb;
        this._adminService = _adminService;
        this.indLoading = false;
    }
    AccountComponent.prototype.ngOnInit = function () {
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
    };
    AccountComponent.prototype.LoadAccounts = function () {
        var _this = this;
        this.indLoading = true;
        this._adminService.get(global_1.Global.BASE_ACCOUNT_ENDPOINT)
            .subscribe(function (res) { _this.accounts = res, _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    AccountComponent.prototype.addAccounts = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Account";
        this.modalBtnTitle = "Add";
        this.accountFrm.reset();
        this.modal.open();
    };
    AccountComponent.prototype.editAccounts = function (username) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Account";
        this.modalBtnTitle = "Update";
        this.account = this.accounts.filter(function (x) { return x.UserName == username; })[0];
        this.accountFrm.setValue(this.account);
        this.modal.open();
    };
    AccountComponent.prototype.deleteAccounts = function (username) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.account = this.accounts.filter(function (x) { return x.UserName == username; })[0];
        this.accountFrm.setValue(this.account);
        this.modal.open();
    };
    AccountComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._adminService.post(global_1.Global.BASE_ACCOUNT_ENDPOINT, formData.value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadAccounts();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._adminService.put(global_1.Global.BASE_ACCOUNT_ENDPOINT, formData.value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadAccounts();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                this._adminService.delete(global_1.Global.BASE_ACCOUNT_ENDPOINT, formData.value.UserName).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadAccounts();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    AccountComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.accountFrm.enable() : this.accountFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.BsModalComponent)
    ], AccountComponent.prototype, "modal", void 0);
    AccountComponent = __decorate([
        core_1.Component({
            templateUrl: '/App/Components/admin/account/account.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, admin_service_1.AdminService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map