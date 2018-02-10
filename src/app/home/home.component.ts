import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, group} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('main-pic', [
      state('start', style({transform: 'translateX(0px)', '-webkit-transform': 'translateX(0px)', opacity: '1'})),
      state('end', style({transform: 'translateX(-1000px)', '-webkit-transform': 'translateX(-1000px)',  opacity: '0'})),
      transition('start <=> end', animate('0.3s 0.1s ease'))
    ]),
    trigger('main-pic-small', [
      state('start', style({transform: 'translateX(0px)', opacity: '1'})),
      state('end', style({transform: 'translateX(-1000px)',  opacity: '0',  display: 'none'})),
      transition('start <=> end', animate('0.3s 0.1s ease'))
    ]),
    trigger('about-me-small', [
      state('start', style({transform: 'translateX(1000px)', opacity: '0', display: 'none'})),
      state('end', style({transform: 'translateX(0px)' })),
      transition('start <=> end', animate('0.3s 0.1s ease'))
    ]),
    trigger('portfolio-small', [
      state('start', style({transform: 'translateX(1000px)', opacity: '0', display: 'none'})),
      state('end', style({transform: 'translateX(0px)'})),
      transition('start <=> end', animate('0.3s 0.1s ease'))
    ]),
    trigger('contact-small', [
      state('start', style({transform: 'translateX(1000px)', opacity: '0', display: 'none'})),
      state('end', style({transform: 'translateX(0px)'})),
      transition('start <=> end', animate('0.3s 0.1s ease'))
    ]),
    trigger('nav-bar', [
      state('start', style({transform: 'translateX(0px)', opacity: '0'})),
      state('end', style({transform: 'translateX(-300px)', 'background-color': 'white'})),
      transition('start <=> end', animate('0.8s 0.0s ease'))
    ]),
    trigger('about-me', [
      state('start', style({transform: 'translateX(1000px)',  '-webkit-transform': 'translateX(1000px)', opacity: '0', display: 'none'})),
      state('end', style({transform: 'translateX(0px)',  '-webkit-transform': 'translateX(-0px)'})),
      transition('start <=> end', animate('0.3s 0.1s ease'))
    ]),
    trigger('experience', [
      state('start', style({transform: 'translateX(1000px)', opacity: '0', display: 'none'})),
      state('end', style({transform: 'translateX(0px)'})),
      transition('start <=> end', animate('0.3s 0.1s ease'))
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  // ngClass variables
  onSelectAboutMe:any

  // ANIMATIONS FOR SMALL VIEW
  mainPicSmall = 'start';
  aboutMeSmall = 'start';
  portfolioSmall = 'start';
  contactSmall = 'start';
  aboutMe = 'start';
  experience = 'start';

  // ANIMATIONS FOR LARGE VIEW
  mainPic = 'start';
  navBar = 'start';


  ngOnInit() {

  }

  animateSmall(value) {
    if (value == 'about-me') {
      this.aboutMeSmall = 'end'
      this.mainPicSmall = 'end'
      this.portfolioSmall = 'start'
      this.contactSmall= 'start';
    }
    else if (value == 'portfolio') {
      this.onSelectAboutMe = 'portfolio'
      this.portfolioSmall = 'end'
      this.mainPicSmall = 'end'
      this.aboutMeSmall = 'start'
      this.contactSmall= 'start';
    }
    else if (value == 'contact') {
      this.onSelectAboutMe = 'contact'
      this.contactSmall= 'end';
      this.mainPicSmall = 'end'
      this.portfolioSmall = 'start'
      this.aboutMeSmall = 'start'
    }
    else {
      this.onSelectAboutMe = 'home'
      this.mainPicSmall = 'start'
      this.contactSmall= 'start';
      this.portfolioSmall = 'start'
      this.aboutMeSmall = 'start'
    }
  }


  // HEADERS
  onSelectHeader(value) {
    if (value == 'about-me') {
      this.onSelectAboutMe = 'about-me'
      this.animateSmall('about-me')
    }
    else if (value == 'portfolio') {
      this.onSelectAboutMe = 'portfolio'
      this.animateSmall('portfolio')
    }
    else if (value == 'contact') {
      this.onSelectAboutMe = 'contact'
      this.animateSmall('contact')
    }
    else {
      this.onSelectAboutMe = 'home'
      this.animateSmall('home')
    }
  }


  // BLUR THE NAV BAR
  closeNavMenu() {
    // if ( this.topLeft == 'menu') {
    //   this.topLeft = 'picture'
    //   this.mainPic = 'start'
    // }
    // else {
    //   this.topLeft = 'menu'
    //   this.mainPic = 'end'
    // }

    if (this.mainPic == 'start') {
      this.mainPic = 'end'
      this.navBar = 'menu'
      this.aboutMe = 'end';
    }
    else if (this.aboutMe == 'end') {
      this.mainPic = 'end'
      this.navBar = 'menu'
      this.aboutMe = 'start';
      this.experience = 'end';

    }

  }

  animateLarge(value) {

    if (value == 'go-to-menu' &&  this.mainPic == 'start') {
      this.mainPic = 'end'
      this.aboutMe = 'end';
    }
    else if (value == 'all-home-or-open' && this.mainPic == 'end') {
      this.mainPic = 'start'
      this.aboutMe = 'start';
    }
    else if (value == 'all-home-or-open' && this.mainPic == 'start') {
      this.mainPic = 'end'
      this.aboutMe = 'end';
    }

  }

  cardAnimate(value) {
    console.log('test func')
    if (value == 'switch-card-about-me' &&  this.aboutMe == 'start') {
      this.aboutMe = 'end';
      this.experience = 'start'
    }
    // else if (value == 'switch-card-experience' &&  this.experience == 'start') {
    //   console.log('test')
    //   this.experience = 'end'
    //   this.aboutMe = 'start';
    // }
  }


}
