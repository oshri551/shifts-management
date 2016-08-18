import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { appRouterProviders } from './app.routes';

import { AppComponent } from './components/appComponent/app.component.ts';

if(process.env.ENV === 'production') {
    enableProdMode();
}


bootstrap(AppComponent, [HTTP_PROVIDERS, disableDeprecatedForms(), provideForms(), appRouterProviders])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

