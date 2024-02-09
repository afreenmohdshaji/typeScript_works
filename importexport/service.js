"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
var StoreService = /** @class */ (function () {
    function StoreService() {
    }
    StoreService.prototype.getAllProducts = function () {
        console.log("all products");
    };
    StoreService.prototype.fetchProductDetail = function () {
        console.log("fetch a product");
    };
    return StoreService;
}());
exports.StoreService = StoreService;
