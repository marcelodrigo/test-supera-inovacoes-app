import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Settings } from 'src/environments/settings';
@Pipe({
    name: 'moeda',
  })
  export class MoedaPipe implements PipeTransform {
    transform(
        value: number,
        currencyCode: string = Settings.systemCurrency,
        display:
            | 'code'
            | 'symbol'
            | 'symbol-narrow'
            | string
            | boolean = 'symbol',
        digitsInfo: string = Settings.currencyDigitsInfo,
        locale: string = Settings.localeID,
    ): string | null {
        return formatCurrency(
          value,
          locale,
          display ? getCurrencySymbol(currencyCode, 'wide') : '',
          currencyCode,
          digitsInfo,
        );
    }
}