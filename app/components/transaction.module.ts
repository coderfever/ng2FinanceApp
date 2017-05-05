import { NgModule}       from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { DatePickerModule } from 'ng2-datepicker';

import { TransactionComponent } from './transaction.component';

import { TransactionService }   from '../services/transaction.service';

@NgModule({
  imports:      [ CommonModule,
                  FormsModule,
                  ChartModule.forRoot(require('highcharts')),
                  DatePickerModule
                ],
  declarations: [ TransactionComponent ],
  exports:      [ TransactionComponent ],
  providers:    [TransactionService]
})

export class TransactionModule { }
