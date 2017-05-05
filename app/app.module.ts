// ANGULAR LIBRARY
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// CUSTOM COMPONENTS
import { TransactionModule }  from './components/transaction.module';
import { UserComponent }      from './components/user.component';


import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { DatepickerModule, AlertModule } from 'ng2-bootstrap';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing,
                  TransactionModule,
                  AlertModule.forRoot(),
                  DatepickerModule.forRoot()
                 ],
  declarations: [ AppComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
