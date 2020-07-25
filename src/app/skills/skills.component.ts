import { Component, OnInit} from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('skillsSet', [
      state('open', style({
        width: '{{level}}'+'%',
      }), {params: {level: 0}}),
      //state('closed', style({})),
      transition('open => closed', [animate('1.5s ease')]),
      transition('closed => open', [animate('1s ease-out')]), 
    ]),

    trigger('skillGraph', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        height: 0+'px',
        transform: 'translatex(100%) scale(0.5) ' 
      })),
      transition('open => closed', [animate('1.5s ease')]),
      transition('closed => open', [animate('1.5s ease-out')]),
 
    ]),

    trigger('tag', [
      state('open', style({
        marginTop: '2rem',
        transform: 'translatey(40%)' 
      })),
      state('closed', style({
        transform: 'scale(0.5) translate(-100%, -100%) rotate(-110deg) ',
        opacity: 0
        // transform: 'rotate(-50deg)' ,
        //transform: 'translatex(100%)' 
      })),
      transition('open => closed', [animate('1.5s ease')]),
      transition('closed => open', [animate('1.5s ease-out')]),
    ]),
   ]
  
})
export class SkillsComponent implements OnInit {
  skills=[
    {name:'Html', level:95, logo: 'devicon-html5-plain'},
    {name:'Css/Sass', level:90, logo: 'devicon-css3-plain '},
    {name:'Javascript', level:80, logo: 'devicon-javascript-plain'},
    {name:'Typescript', level:70, logo: 'devicon-typescript-plain'},
    {name:'Php', level:75, logo: 'devicon-php-plain'},
    {name:'MySql', level:75, logo: 'devicon-mysql-plain-wordmark'},
    {name:'Vue.js', level:70, logo: 'devicon-vuejs-plain'},
    {name:'Angular', level:70, logo: 'devicon-angularjs-plain'},
    {name:'Laravel', level:70, logo: 'devicon-laravel-plain'},
    {name:'Node.js', level:40, logo: 'devicon-nodejs-plain'},
  ]
  
  isVisible = true;
  isOpen = false;
  toggleClickable = true;

  toggle() {
    this.isVisible = !this.isVisible;
    this.isOpen = !this.isOpen;
    this.toggleClickable =!this.toggleClickable;
    setTimeout(()=>{ 
      this.toggleClickable =!this.toggleClickable;
    }, 1500);
     
  }


  
  constructor() { }
  ngOnInit() {
    
  }

}
