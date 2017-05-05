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
var forms_1 = require("@angular/forms");
var angular2_highcharts_1 = require("angular2-highcharts");
var transaction_component_1 = require("./transaction.component");
var transaction_service_1 = require("../services/transaction.service");
var TransactionModule = (function () {
    function TransactionModule() {
    }
    return TransactionModule;
}());
TransactionModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            forms_1.FormsModule,
            angular2_highcharts_1.ChartModule.forRoot(require('highcharts'))
        ],
        declarations: [transaction_component_1.TransactionComponent],
        exports: [transaction_component_1.TransactionComponent],
        providers: [transaction_service_1.TransactionService]
    })
], TransactionModule);
exports.TransactionModule = TransactionModule;
//# sourceMappingURL=transaction.module.js.map