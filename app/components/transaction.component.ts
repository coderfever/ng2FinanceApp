
import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionService } from '../services/transaction.service';
//import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { ChartModule } from 'angular2-highcharts';
// import { TransactionFormComponent } from './TransactionFormComponent';

@Component({
  moduleId: module.id,
  selector: 'transactions',
  templateUrl: 'transaction.component.html',
  styleUrls: []
})

export class TransactionComponent implements OnInit {
    transaction: Transaction;
    transactions: Transaction[];
    ydata: number[] = [];
    categories: string[] = [
      "Restuarant",
      "Grocery",
      "Auto"
    ];

    date: DateModel;
    //options: DatePickerOptions;

    isOpenForm: boolean = false;

    constructor(private transactionService: TransactionService){
    //  this.options = new DatePickerOptions;
    }

    options: Object;

    ngOnInit() {
      this.transactionService.getTransactions().then(transactions => {
        this.transactions = transactions;
        this.transaction = transactions[0];
      });

    }

    runTest () {
      this.ydata = [];
      for (var i = 0; i < this.transactions.length; i++) {
        this.ydata.push(this.transactions[i].amount);
      }
      console.log(this.ydata);
      this.options = {
        title: { text: 'simple chart'},
        series: [{
          data: this.ydata
        }]
      };
    }

    deleteTransaction(i : any) {
      console.log(i);
      this.transactions.splice(i,1);
    }

    showForm() {
      console.log(this.isOpenForm);
      this.isOpenForm = (this.isOpenForm === false? true : false);
      this.transaction = {id: 1, transactionDate: '', storeName: '', amount: 0, category: '' };

    }

    submitForm() {
      this.transactions.push(this.transaction);
      this.isOpenForm = false;
    }

    cancelForm() {
      this.isOpenForm = false;
    }

 }
