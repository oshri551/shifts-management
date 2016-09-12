import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.css')] 
})
export class homeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}