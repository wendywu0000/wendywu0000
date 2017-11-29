import { Component, OnInit } from '@angular/core';
import { ModalModule } from "ng2-modal";
import { CurrencyConversionService } from './currency.conversion.service'

@Component({
  selector: 'currency-conversion',
  templateUrl: './currency.conversion.html',
  styleUrls: ['./currency.conversion.css']
})
export class CurrencyConversionComponent implements OnInit {
  error: any = null;
  fromAmount: number = 1;
  toAmount: number = 0;
  fromCurrency: string = 'CAD';
  toCurrency: string = 'USD';
  rates: Array<any> = [];
  fromRates: Object = {};


  constructor(private dataService: CurrencyConversionService) { }

  ngOnInit() {
    this.convert(false, true);
  }

  public convert(reverse, initial) {
    this.dataService.getRates(this.fromCurrency).subscribe(
      data => {
        console.log("data from server : ", data);
        if (data.rates) {
          if (initial) {
            const items: Array<any> = this.parseData(data.rates);
            items.push({ id: 'CAD', value: 1 });
            this.rates = items;
          }
          this.fromRates = data.rates;

          this.calculate(reverse);
        }
        else {
          this.error = "error from server"
        }
      },
      err => this.logError(err),
      () => this.done()
    );


  }

  public calculate(reverse) {
    this.handleErrors();

    if (!this.error) {
      if (reverse) {
        this.fromAmount = Math.round(this.toAmount / this.fromRates[this.toCurrency] * 100) / 100;
      } else {
        this.toAmount = Math.round(this.fromAmount * this.fromRates[this.toCurrency] * 100) / 100;
      }
    }
  }

  private logError(err: any) {
    console.log("error: " + err);
  }

  private done() {
    console.log("done! ");
  }

  private parseData(data) {
    const arr: Array<any> = [];

    for (const key in data) {
      if (key && (key == 'USD' || key == 'EUR')) {
        const obj = {
          id: key,
          value: data[key]
        };
        arr.push(obj);
      }
    }

    return arr;
  }

  private handleErrors() {
    this.error = null;

    if (!this.fromAmount && !this.toAmount) {
      this.error = 'Please enter the amount';
      return;
    }

    if (!this.fromCurrency) {
      this.error = 'Please set currency';
      return;
    }

    if (!this.toCurrency) {
      this.error = 'Please choose to currency';
      return;
    }

    if (this.toCurrency === this.fromCurrency) {
      this.fromAmount = this.toAmount;
      this.error = "Converting " + this.toCurrency + "to " + this.fromCurrency + " can't be the same";
      return;
    }
  }

  showDisclaimer() {

  }

}
