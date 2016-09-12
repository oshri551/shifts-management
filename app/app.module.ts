import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from './material.module';

import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './components/appComponent/app.component';
import { appHeaderComponent } from './components/appHeaderComponent/appHeader.component';
import { managerComponent } from './components/managerComponent/manager.component';
import { workerComponent } from './components/workerComponent/worker.component';
import { homeComponent } from './components/homeComponent/home.component';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpModule, 
        RouterModule,
        MaterialModule, 
        routing
        ],
    declarations: [
        AppComponent, 
        appHeaderComponent, 
        managerComponent, 
        workerComponent, 
        homeComponent
        ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule{}