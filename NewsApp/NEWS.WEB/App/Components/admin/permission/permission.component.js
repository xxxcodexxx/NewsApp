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
var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(fb, _adminService) {
        this.fb = fb;
        this._adminService = _adminService;
        this.indLoading = false;
    }
    PermissionComponent.prototype.ngOnInit = function () {
        this.permissionFrm = this.fb.group({
            Id: [''],
            PermissionName: [''],
            Status: [''],
        });
        this.LoadPermissions();
    };
    PermissionComponent.prototype.LoadPermissions = function () {
        var _this = this;
        this.indLoading = true;
        this._adminService.get(global_1.Global.BASE_PERMISSION_ENDPOINT)
            .subscribe(function (res) { _this.permissions = res, _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    PermissionComponent.prototype.addPermissions = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Permission";
        this.modalBtnTitle = "Add";
        this.permissionFrm.reset();
        this.modal.open();
    };
    PermissionComponent.prototype.editPermissions = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Permission";
        this.modalBtnTitle = "Update";
        this.permission = this.permissions.filter(function (x) { return x.PermissionId == id; })[0];
        this.permissionFrm.setValue(this.permission);
        this.modal.open();
    };
    PermissionComponent.prototype.deletePermissions = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.permission = this.permissions.filter(function (x) { return x.PermissionId == id; })[0];
        this.permissionFrm.setValue(this.permission);
        this.modal.open();
    };
    PermissionComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._adminService.post(global_1.Global.BASE_PERMISSION_ENDPOINT, formData.value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadPermissions();
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
                this._adminService.put(global_1.Global.BASE_PERMISSION_ENDPOINT, formData.value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadPermissions();
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
                this._adminService.delete(global_1.Global.BASE_PERMISSION_ENDPOINT, formData.value.Id).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadPermissions();
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
    PermissionComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.permissionFrm.enable() : this.permissionFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.BsModalComponent)
    ], PermissionComponent.prototype, "modal", void 0);
    PermissionComponent = __decorate([
        core_1.Component({
            templateUrl: '/App/Components/admin/permission/permission.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, admin_service_1.AdminService])
    ], PermissionComponent);
    return PermissionComponent;
}());
exports.PermissionComponent = PermissionComponent;
//# sourceMappingURL=permission.component.js.map