import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
    `
})
export class AppComponent implements OnInit {
    public title = "Angular 2 project from scratch";
    
    constructor() { }

    ngOnInit() { }

}