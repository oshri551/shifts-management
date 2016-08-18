import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'manager',
    template: require('./manager.component.html'),
    styles: [require('./manager.component.css')]
})
export class managerComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}