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
var category_service_1 = require("../../../Service/category.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal");
var enum_1 = require("../../../Shared/enum");
var global_1 = require("../../../Shared/global");
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(fb, _categoryService) {
        this.fb = fb;
        this._categoryService = _categoryService;
        this.indLoading = false;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.categoryFrm = this.fb.group({
            CategoryId: [''],
            CategoryName: ['', forms_1.Validators.required],
            ParentId: [''],
            Status: ['']
        });
        this.LoadCategories();
    };
    CategoryComponent.prototype.LoadCategories = function () {
        var _this = this;
        this.indLoading = true;
        this._categoryService.get(global_1.Global.BASE_CATEGORY_ENDPOINT)
            .subscribe(function (res) { _this.categories = res, _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    CategoryComponent.prototype.addCategory = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Category";
        this.modalBtnTitle = "Add";
        this.categoryFrm.reset();
        this.modal.open();
    };
    CategoryComponent.prototype.editCategory = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Category";
        this.modalBtnTitle = "Update";
        this.category = this.categories.filter(function (x) { return x.Id == id; })[0];
        this.categoryFrm.setValue(this.category);
        this.modal.open();
    };
    CategoryComponent.prototype.deleteCategory = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.category = this.categories.filter(function (x) { return x.Id == id; })[0];
        this.categoryFrm.setValue(this.category);
        this.modal.open();
    };
    CategoryComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._categoryService.post(global_1.Global.BASE_CATEGORY_ENDPOINT, formData.value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadCategories();
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
                this._categoryService.put(global_1.Global.BASE_CATEGORY_ENDPOINT, formData.value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadCategories();
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
                this._categoryService.delete(global_1.Global.BASE_CATEGORY_ENDPOINT, formData.value.CategoryId).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadCategories();
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
    CategoryComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.categoryFrm.enable() : this.categoryFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.BsModalComponent)
    ], CategoryComponent.prototype, "modal", void 0);
    CategoryComponent = __decorate([
        core_1.Component({
            templateUrl: '/App/Components/admin/category/category.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, category_service_1.CategoryService])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map