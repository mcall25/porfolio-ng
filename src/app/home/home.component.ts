import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, group} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('main-pic', [
      state('start', style({transform: 'translateX(0px)', opacity: '1'})),
      state('end', style({transform: 'translateX(-900px)',  opacity: '0'})),
      transition('start <=> end', animate('0.3s 0.1s ease'))
    ]),
    trigger('top-left', [
      state('picture', style({transform: 'translateX(0px)', opacity: '0'})),
      state('menu', style({transform: 'translateX(-300px)', 'background-color': 'white'})),
      transition('picture <=> menu', animate('0.8s 0.0s ease'))
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }


  // ANIMATIONS FOR NAVIGATION BAR
  mainPic= 'start';
  topLeft = 'picture';


  ngOnInit() {
  }


  // BLUR THE NAV BAR
  closeNavMenu() {
    if ( this.topLeft == 'menu') {
      this.topLeft = 'picture'
      this.mainPic = 'start'
    }
    else {
      this.topLeft = 'menu'
      this.mainPic = 'end'
    }

  }


}
