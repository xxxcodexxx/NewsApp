"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var comment_component_1 = require("./comment.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal");
var CommentModule = /** @class */ (function () {
    function CommentModule() {
    }
    CommentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.BsModalModule,
                router_1.RouterModule.forChild([
                    { path: '', component: comment_component_1.CommentComponent }
                ])
            ],
            declarations: [comment_component_1.CommentComponent],
            exports: [router_1.RouterModule]
        })
    ], CommentModule);
    return CommentModule;
}());
exports.CommentModule = CommentModule;
//# sourceMappingURL=comment.module.js.map