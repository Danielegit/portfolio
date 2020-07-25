import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projects = [
    {
      name: 'WTR - Weather Pro',
      web: 'http://daniele.codefactory.live/projects/weather-app',
      img: 'assets/projects/img/wtr.png',
      desc: 'Angular, Weather Api'
    },
    {
      name: 'FindMyGame',
      web: 'http://daniele.codefactory.live/projects/findmygame',
      img: 'assets/projects/img/findmygame.png',
      desc: 'Php, MySql, Javascript'
    }
  ]
  ngOnInit() {
  }

}
