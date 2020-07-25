import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [

    trigger('menuPhone', [
      state('visible', style({
        height: '100%',
      
      })),
      state('hidden', style({
        height: '0px',

      }))
    ]),

    trigger('menuLink', [
      state('visible', style({
        display: 'block',
        opacity: '1',
        width: '100%'
      })),
      state('hidden', style({
        opacity: '0',
        transform: 'translatex(-100%) scale(0.01)' ,
        width: '0%'
      })),
      transition('visible => hidden', [animate('1.5s ease')]),
      transition('hidden => visible', [animate('1s ease-out')]), 
    ]),

    trigger('toggleButton', [
      state('hidden', style({
        display: 'block',
        opacity: '1',
      })),
      state('visible', style({
        opacity: '0',
        transform: 'translatex(100%) scale(0.5) rotate(360deg)' 
      })),
      transition('visible => hidden', [animate('1.5s ease-out')]),
      transition('hidden => visible', [animate('1.5s ease-out')]), 
    ]),
    trigger('closeButton', [
      state('visible', style({
        display: 'block',
        opacity: '1',
      })),
      state('hidden', style({
        opacity: '0',
        transform: 'translatex(100%) scale(0.5) rotate(360deg)' 
      })),
      transition('visible => hidden', [animate('1.5s ease-out')]),
      transition('hidden => visible', [animate('1.5s ease-out')]), 
    ]),

  ]
})
export class NavbarComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }
  isVisible = false;
  toggle(){
    console.log(this.isVisible)
    this.isVisible = !this.isVisible
  }

  

      


  ngOnInit() {
    this.breakpointObserver
    .observe(['(max-width: 750px)'])
    .subscribe((state: BreakpointState) => {
      if (!state.matches) {
        this.isVisible = false;
      }
    });

    

}
}
