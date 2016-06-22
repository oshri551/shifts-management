import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    template: require('./appHeader.component.html'),
    styles: [require('./appHeader.component.css')],
    directives: [MdToolbar]
})
export class appHeaderComponent implements OnInit {
    private menuState: boolean;
    @Output() onMenuClick = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { 
        this.menuState = false;
    }

    toggleMenu() {
        this.onMenuClick.emit(!this.menuState);
        this.menuState = !this.menuState;
        console.log("click event", this.menuState);
    }

}