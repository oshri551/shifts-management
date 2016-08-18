import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'worker',
    template: require('./worker.component.html'),
    styles: [require('./Worker.component.css')]
})
export class workerComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}