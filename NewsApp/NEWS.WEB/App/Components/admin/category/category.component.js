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
var global_1 = require("../../../Shared/global");
//import { filter } from 'rxjs/operator/filter';
//import { debounce } from 'rxjs/operator/debounce';
//import { elementAt } from 'rxjs/operator/elementAt';
//import { debug } from 'util';
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(_categoryService) {
        this._categoryService = _categoryService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.LoadCategories();
    };
    CategoryComponent.prototype.LoadCategories = function () {
        var _this = this;
        this._categoryService.get(global_1.Global.BASE_CATEGORY_ENDPOINT)
            .subscribe(function (res) { _this.categories = res, console.log(res); }, function (error) { return _this.msg = error; });
    };
    CategoryComponent = __decorate([
        core_1.Component({
            templateUrl: '/App/Components/admin/category/category.component.html'
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map