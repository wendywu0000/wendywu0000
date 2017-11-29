import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule} from "@angular/forms";
import {ModalModule} from "ng2-modal";
import {CurrencyConversionComponent} from './currency.conversion.component'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule
    ],
    declarations: [
        CurrencyConversionComponent
    ],
    exports: [CurrencyConversionComponent]
})
export class CurrencyConversionModule { }