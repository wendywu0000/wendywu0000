import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CurrencyConversionModule} from './currency.conversion.module'
import {CurrencyConversionService} from './currency.conversion.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CurrencyConversionModule
  ],
  providers: [CurrencyConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
