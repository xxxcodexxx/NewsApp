"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var aside_component_1 = require("./aside.component");
var category_component_1 = require("../category/category.component");
var news_component_1 = require("../news/news.component");
var account_component_1 = require("../account/account.component");
var permission_component_1 = require("../permission/permission.component");
var comment_component_1 = require("../comment/comment.component");
var feedback_component_1 = require("../feedback/feedback.component");
var AsideRoutingModule = /** @class */ (function () {
    function AsideRoutingModule() {
    }
    AsideRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: '', component: aside_component_1.AsideComponent },
                    { path: 'home/category', component: category_component_1.CategoryComponent },
                    { path: 'home/news', component: news_component_1.NewsComponent },
                    { path: 'home/account', component: account_component_1.AccountComponent },
                    { path: 'home/permission', component: permission_component_1.PermissionComponent },
                    { path: 'home/comment', component: comment_component_1.CommentComponent },
                    { path: 'home/feedback', component: feedback_component_1.FeedbackComponent },
                ])
            ],
            exports: [router_1.RouterModule]
        })
    ], AsideRoutingModule);
    return AsideRoutingModule;
}());
exports.AsideRoutingModule = AsideRoutingModule;
//# sourceMappingURL=aside-routing.js.map