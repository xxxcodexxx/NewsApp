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
var CommentComponent = /** @class */ (function () {
    function CommentComponent(fb, _adminService) {
        this.fb = fb;
        this._adminService = _adminService;
        this.indLoading = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.commentFrm = this.fb.group({
            CommentId: [''],
            Content: [''],
            Poster: [''],
            PostedTime: [''],
            ParentId: [''],
            Status: [''],
        });
        this.LoadComments();
    };
    CommentComponent.prototype.LoadComments = function () {
        var _this = this;
        this.indLoading = true;
        this._adminService.get(global_1.Global.BASE_COMMENT_ENDPOINT)
            .subscribe(function (res) { _this.comments = res, _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    CommentComponent.prototype.detailComments = function (id) {
        this.SetControlsState(false);
        this.modalTitle = "Detail Comment";
        this.modalBtnTitle = "";
        this.comment = this.comments.filter(function (x) { return x.CommentId == id; })[0];
        this.commentFrm.setValue(this.comment);
        this.modal.open();
    };
    CommentComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.commentFrm.enable() : this.commentFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.BsModalComponent)
    ], CommentComponent.prototype, "modal", void 0);
    CommentComponent = __decorate([
        core_1.Component({
            templateUrl: '/App/Components/admin/comment/comment.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, admin_service_1.AdminService])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map