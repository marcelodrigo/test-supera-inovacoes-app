import { registerLocaleData } from '@angular/common';

import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr, 'pt-BR');

export const Settings = Object.freeze({
    localeID: 'pt-BR',
    systemCurrency: 'BRL',
    currencyDigitsInfo: '1.2-2',
});