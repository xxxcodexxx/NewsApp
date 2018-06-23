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
var NewsComponent = /** @class */ (function () {
    function NewsComponent(fb, _adminService) {
        this.fb = fb;
        this._adminService = _adminService;
        this.indLoading = false;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.newFrm = this.fb.group({
            NewsId: [''],
            Title: ['', forms_1.Validators.required],
            Description: [''],
            Content: [''],
            Image: [''],
            Status: [''],
            CategoryId: [''],
            CreatedTime: [''],
            ModifiedTime: [''],
            CreateBy: [''],
            ModifiedBy: [''],
            Author: [''],
            ViewCount: [''],
            Tags: [''],
            CategoryName: ['']
        });
        this.loadCategory();
        this.LoadNews();
    };
    NewsComponent.prototype.LoadNews = function () {
        var _this = this;
        this.indLoading = true;
        this._adminService.get(global_1.Global.BASE_NEWS_ENDPOINT)
            .subscribe(function (res) { _this.news = res, _this.indLoading = false, _this.LoadParentCategory(_this.news); }, function (error) { return _this.msg = error; });
    };
    NewsComponent.prototype.addNew = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New ";
        this.modalBtnTitle = "Add";
        this.newFrm.reset();
        this.modal.open();
    };
    NewsComponent.prototype.loadCategory = function () {
        var _this = this;
        this._adminService.get(global_1.Global.BASE_CATEGORY_ENDPOINT)
            .subscribe(function (res) { _this.category = res; }, function (error) { return _this.msg = error; });
    };
    NewsComponent.prototype.LoadParentCategory = function (item) {
        var _this = this;
        item.forEach(function (val) {
            _this.category.forEach(function (value) {
                if (val.CategoryId == value.CategoryId) {
                    val.CategoryName = value.CategoryName;
                }
                if (val.CategoryId == 0) {
                    val.CategoryName = "";
                }
            });
        });
    };
    NewsComponent.prototype.editNew = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit New";
        this.modalBtnTitle = "Update";
        this.new = this.news.filter(function (x) { return x.NewsId == id; })[0];
        if (this.new.CategoryId == 0)
            this.new.CategoryId = null;
        this.newFrm.setValue(this.new);
        this.modal.open();
    };
    NewsComponent.prototype.deleteNew = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.new = this.news.filter(function (x) { return x.NewsId == id; })[0];
        this.newFrm.setValue(this.new);
        this.modal.open();
    };
    NewsComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._adminService.post(global_1.Global.BASE_NEWS_ENDPOINT, formData.value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadNews();
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
                this._adminService.put(global_1.Global.BASE_NEWS_ENDPOINT, formData.value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadNews();
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
                this._adminService.delete(global_1.Global.BASE_NEWS_ENDPOINT, formData.value.NewsId).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadNews();
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
    NewsComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.newFrm.enable() : this.newFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.BsModalComponent)
    ], NewsComponent.prototype, "modal", void 0);
    NewsComponent = __decorate([
        core_1.Component({
            templateUrl: '/App/Components/admin/news/news.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, admin_service_1.AdminService])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map