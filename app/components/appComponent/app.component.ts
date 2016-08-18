import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MdSidenav ,MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { appHeaderComponent } from '../appHeaderComponent/appHeader.component.ts';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Dir } from '@angular2-material/core/rtl/dir';
import { lifecycleHooksComponent } from '../lifecycleHooksComponent/lifecycleHooks.component';
import { YoutubeCardComponent} from '../youtubeCardComponent/youtubeCard.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [
        require('./app.component.css')
    ],
    directives: [MdSidenav ,MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_INPUT_DIRECTIVES, Dir, appHeaderComponent, lifecycleHooksComponent, YoutubeCardComponent, ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
    public title = "Angular 2 youtube-fav";
    public cards = [
        {name: 'vid1', embed: 'https://www.youtube.com/embed/SBjQ9tuuTJQ'},
        {name: 'vid2', embed: 'https://www.youtube.com/embed/SBjQ9tuuTJQ'}
    ]

    @ViewChild('sidenav') private sidenav: MdSidenav;
    togglePromiseFinished: boolean = true;
    
    constructor() { }

    ngOnInit() { }

    toggleMenu () {

        if(this.togglePromiseFinished) {
            this.togglePromiseFinished = false;

            this.sidenav.toggle().then(
                (res) => {this.togglePromiseFinished = true}
            );
        }
        
    }

}
