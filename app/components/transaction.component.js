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
var transaction_service_1 = require("../services/transaction.service");
var ng2_datepicker_1 = require("ng2-datepicker");
// import { TransactionFormComponent } from './TransactionFormComponent';
var TransactionComponent = (function () {
    function TransactionComponent(transactionService) {
        this.transactionService = transactionService;
        this.ydata = [];
        this.categories = [
            "Restuarant",
            "Grocery",
            "Auto"
        ];
        this.isOpenForm = false;
        this.options = new ng2_datepicker_1.DatePickerOptions;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionService.getTransactions().then(function (transactions) {
            _this.transactions = transactions;
            _this.transaction = transactions[0];
        });
    };
    TransactionComponent.prototype.runTest = function () {
        this.ydata = [];
        for (var i = 0; i < this.transactions.length; i++) {
            this.ydata.push(this.transactions[i].amount);
        }
        console.log(this.ydata);
        this.options = {
            title: { text: 'simple chart' },
            series: [{
                    data: this.ydata
                }]
        };
    };
    TransactionComponent.prototype.deleteTransaction = function (i) {
        console.log(i);
        this.transactions.splice(i, 1);
    };
    TransactionComponent.prototype.showForm = function () {
        console.log(this.isOpenForm);
        this.isOpenForm = (this.isOpenForm === false ? true : false);
        this.transaction = { id: 1, transactionDate: '', storeName: '', amount: 0 };
    };
    TransactionComponent.prototype.submitForm = function () {
        this.transactions.push(this.transaction);
        this.isOpenForm = false;
    };
    TransactionComponent.prototype.cancelForm = function () {
        this.isOpenForm = false;
    };
    return TransactionComponent;
}());
TransactionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'transactions',
        templateUrl: 'transaction.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionComponent);
exports.TransactionComponent = TransactionComponent;
//# sourceMappingURL=transaction.component.js.map