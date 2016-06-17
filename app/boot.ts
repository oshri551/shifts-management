import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './components/appComponent/app.component.ts';

if(process.env.ENV === 'production') {
    enableProdMode();
}


bootstrap(AppComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

