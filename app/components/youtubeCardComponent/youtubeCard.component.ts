import { Component, OnInit ,Input} from '@angular/core';
import { MdButton, MdAnchor } from '@angular2-material/button';
import { MdCard, MdCardHeader } from '@angular2-material/card';

@Component({
    selector: 'youtube-card',
    template: require('./youtubeCard.component.html'),
    styles: [
        require('./youtubeCard.component.css')
    ],
    directives: [MdCard, MdCardHeader ]
})
export class YoutubeCardComponent implements OnInit {
    @Input () name: string;
    @Input () embed: string;

    constructor() {

     }

    ngOnInit() { }

}
