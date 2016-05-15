import { Component, OnInit } from '@angular/core';
import { MdButton, MdAnchor } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <button md-raised-button>Test</button>
        <md-input placeholder="Test" autofocus></md-input>
    `,
    directives: [MdButton, MdAnchor, MD_INPUT_DIRECTIVES]
})
export class AppComponent implements OnInit {
    public title = "Angular 2 project from scratch";
    
    constructor() { }

    ngOnInit() { }

}