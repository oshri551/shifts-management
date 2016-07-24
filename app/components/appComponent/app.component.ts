import { Component, ViewChild, OnInit } from '@angular/core';
import { MdSidenav ,MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { appHeaderComponent } from '../appHeaderComponent/appHeader.component.ts';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { lifecycleHooksComponent } from '../lifecycleHooksComponent/lifecycleHooks.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <md-content>
        <app-header (onMenuClick)="toggleMenu()"></app-header>

        <md-sidenav-layout class="sidenav-layout">
            <md-sidenav #sidenav mode="over" class="side-nav-custom">
                
                <md-nav-list class="nav-no-padding">
                    <md-list-item>
                        <a class="nav-tile">Menu Item 1</a>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item>
                        <a class="nav-tile">Menu Item 2</a>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item>
                        <a class="nav-tile">Menu Item 3</a>
                    </md-list-item>
                    <md-divider></md-divider>
                </md-nav-list>
                
            </md-sidenav>
            <div class="app-content">
            <h1>{{title}} </h1>
            
            <lifecycle-hooks></lifecycle-hooks>
        </div><!--helooooo-->
        </md-sidenav-layout>
    </md-content>
    `,
    styles: [
        require('./app.component.css'),
      `
        .app-content {
            position: relative;
            padding: 40px 25px 30px;
        }
      `  
    ],
    directives: [MdSidenav ,MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_INPUT_DIRECTIVES, appHeaderComponent, lifecycleHooksComponent]
})
export class AppComponent implements OnInit {
    public title = "Angular 2 project from scratch";

    @ViewChild('sidenav') private sidenav: MdSidenav;
    
    constructor() { }

    ngOnInit() { }

    toggleMenu () {
        this.sidenav.toggle();
    }

}