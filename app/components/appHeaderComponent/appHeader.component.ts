import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
    selector: 'app-header',
    template: require('./appHeader.component.html'),
    styles: [require('./appHeader.component.css')],
    directives: [MdToolbar]
})
export class appHeaderComponent implements OnInit {
    @Output() onMenuClick = new EventEmitter();
    imgSrc = "assets/img/new-deli-logo-retina.png"

    constructor() { }

    ngOnInit() {
    }

    toggleMenu() {
        this.onMenuClick.emit({});
    }

}