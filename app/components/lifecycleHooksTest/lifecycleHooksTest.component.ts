import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'lifecycle-hooks-test',
    template: require('./lifecycleHooksTest.component.html'),
    styles: [require('./lifecycleHooksTest.component.css')]
})

export class lifecycleHooksTestComponent implements OnInit {
    @Input () logs: Array<string>; 
    @Output () onClose = new EventEmitter<string>();
    @Input () name: string;

    constructor() { }

    ngOnInit() { 
    }

    ngOnDestroy() { console.log("destroyed") }

    addLog(log: string) {
        this.logs.push(log);
    }

    close() {
        this.onClose.emit(this.name);
    }

}