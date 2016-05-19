import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    template: require('./appHeader.component.html'),
    styles: [require('./appHeader.component.css')],
    directives: [MdToolbar]
})
export class appHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}