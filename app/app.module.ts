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

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing,
                  TransactionModule ],
  declarations: [ AppComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
