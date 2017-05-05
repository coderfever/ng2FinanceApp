"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Transaction = (function () {
    function Transaction(id, transactionDate, storeName, amount, category) {
        this.id = id;
        this.transactionDate = transactionDate;
        this.storeName = storeName;
        this.amount = amount;
        this.category = category;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
var Transactions = [
    new Transaction(123, '2017-03-19', 'Boston', 12, "Restuarant"),
    new Transaction(124, '2017-03-20', 'Charlis', 13.00, "Grocery"),
    new Transaction(125, '2017-03-18', 'alphaa', 23.00, "Grocery"),
];
var TransactionService = (function () {
    function TransactionService() {
    }
    TransactionService.prototype.getTransactions = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(Transactions); }, 500);
        });
    };
    return TransactionService;
}());
TransactionService = __decorate([
    core_1.Injectable()
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map