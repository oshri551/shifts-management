import { Component, OnInit } from '@angular/core';
import { MdButton, MdAnchor } from '@angular2-material/button';
import { appHeaderComponent } from '../appHeaderComponent/appHeader.component.ts';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { lifecycleHooksComponent } from '../lifecycleHooksComponent/lifecycleHooks.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <app-header></app-header>
        <div class="app-content">
            <h1>{{title}}</h1>
            <!--
            <button md-raised-button>Test</button>
            <md-input placeholder="Test" autofocus></md-input>
            <span>Span1</span>
            -->
            <lifecycle-hooks></lifecycle-hooks>
        </div>
    `,
    styles: [
      `
        .app-content {
            position: relative;
            padding: 40px 25px 30px;
        }
      `  
    ],
    directives: [MdButton, MdAnchor, MD_INPUT_DIRECTIVES, appHeaderComponent, lifecycleHooksComponent]
})
export class AppComponent implements OnInit {
    public title = "Angular 2 project from scratch";
    
    constructor() { }

    ngOnInit() { }

}