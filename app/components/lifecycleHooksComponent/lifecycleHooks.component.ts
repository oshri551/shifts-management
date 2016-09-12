import { Component, OnInit , Input} from '@angular/core';
import { lifecycleHooksTestComponent } from '../lifecycleHooksTest/lifecycleHooksTest.component';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { FORM_DIRECTIVES } from '@angular/forms'
import { MdButton, MdAnchor } from '@angular2-material/button';

@Component({
    selector: 'lifecycle-hooks',
    template: require('./lifecycleHooks.component.html'),
    styles: [require('./lifecycleHooks.component.css')],
    directives: [MD_INPUT_DIRECTIVES, MdButton, MdAnchor, lifecycleHooksTestComponent, FORM_DIRECTIVES]
})
export class lifecycleHooksComponent implements OnInit {
    list: Array<string>;
    logs: Array<string>;

    constructor() { 
    }

    addToList(item: string) {
        if(item.trim().length > 0) {
            this.list.push(item);
            console.log(this.list);
        }
    }

    ngOnInit() { 
        this.logs = [];

        this.list = [
            "1",
            "2",
            "3"
        ];
    }

    removeFromlist(name: string) {
        this.list.splice(this.list.indexOf(name), 1);
    }

}