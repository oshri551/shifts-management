import { Component, ViewChild, OnInit } from '@angular/core';
import { MdSidenav ,MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { appHeaderComponent } from '../appHeaderComponent/appHeader.component.ts';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { lifecycleHooksComponent } from '../lifecycleHooksComponent/lifecycleHooks.component';
import { YoutubeCardComponent} from '../youtubeCardComponent/youtubeCard.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [
        require('./app.component.css')
    ],
    directives: [MdSidenav ,MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_INPUT_DIRECTIVES, appHeaderComponent, lifecycleHooksComponent, YoutubeCardComponent]
})
export class AppComponent implements OnInit {
    public title = "Angular 2 youtube-fav";

    @ViewChild('sidenav') private sidenav: MdSidenav;
    
    constructor() { }

    ngOnInit() { }

    toggleMenu () {
        this.sidenav.toggle();
    }

}