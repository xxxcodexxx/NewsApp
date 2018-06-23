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
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(fb, _adminService) {
        this.fb = fb;
        this._adminService = _adminService;
        this.indLoading = false;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.feedbackFrm = this.fb.group({
            FeedbackId: [''],
            Content: [''],
            FullName: [''],
            Email: [''],
            SendedTime: [''],
            Status: [''],
        });
        this.LoadFeedbacks();
    };
    FeedbackComponent.prototype.LoadFeedbacks = function () {
        var _this = this;
        this.indLoading = true;
        this._adminService.get(global_1.Global.BASE_FEEDBACK_ENDPOINT)
            .subscribe(function (res) { _this.feedbacks = res, _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    FeedbackComponent.prototype.detailFeedbacks = function (id) {
        this.SetControlsState(false);
        this.modalTitle = "Detail Feedback";
        this.modalBtnTitle = "";
        this.feedback = this.feedbacks.filter(function (x) { return x.FeedbackId == id; })[0];
        this.feedbackFrm.setValue(this.feedback);
        this.modal.open();
    };
    FeedbackComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.feedbackFrm.enable() : this.feedbackFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.BsModalComponent)
    ], FeedbackComponent.prototype, "modal", void 0);
    FeedbackComponent = __decorate([
        core_1.Component({
            templateUrl: '/App/Components/admin/feedback/feedback.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, admin_service_1.AdminService])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map