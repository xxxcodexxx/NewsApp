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
var account_component_1 = require("./account.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal");
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.BsModalModule,
                router_1.RouterModule.forChild([
                    { path: '', component: account_component_1.AccountComponent }
                ])
            ],
            declarations: [account_component_1.AccountComponent],
            exports: [router_1.RouterModule]
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map