import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MultipePipe } from './pipe/multipe.pipe';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultipePipe,
    StockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    WjInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
