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
var TestComponent = (function () {
    function TestComponent() {
        this.header_title = "This is an test2 page!";
        this.transactions = [
            {
                id: 123,
                storeName: 'Boston',
                amount: 12.00
            },
            {
                id: 1233,
                storeName: 'Charlie',
                amount: 13.00
            }
        ];
        this.transaction = {
            id: 0,
            storeName: '',
            amount: 0
        };
    }
    TestComponent.prototype.saveTransaction = function (transaction) {
        console.log(transaction);
    };
    TestComponent.prototype.deleteTransaction = function (i) {
        console.log(i);
        this.transactions.splice(i, 1);
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'test',
        templateUrl: 'test.component.html',
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map