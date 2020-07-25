import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, style, transition, animate, state } from '@angular/animations';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  animations: [
    trigger('cForm', [
      state('open', style({
        
      })),
      state('closed', style({
        transform: ' translate(-100rem, 0%)',
        height : '0px'
      })),
      transition('open => closed', [animate('1.5s ease')]),
      transition('closed => open', [animate('1s ease-out')]), 
    ]),
    trigger('cBeenSent', [
      state('open', style({
        transform: ' translate(100rem, 0%)',
        height : '0px'
      })),
      state('closed', style({
       // transform: ' translate(-100rem, 0%)',
      })),
      transition('open => closed', [animate('1.5s ease')]),
      transition('closed => open', [animate('1s ease-out')]), 
    ]),
  ]
})
export class ContactMeComponent implements OnInit {
  email : string;
  name : string;
  message : string;
  endpoint : string;
  submited: boolean = false;
  isFormVisible: boolean = true;
  constructor(public http : HttpClient) { 
  
  }
  
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    name: new FormControl('', Validators.required),
    message :  new FormControl('', Validators.required)
  });

  ngOnInit() {
        //This data could really come from some inputs on the interface - but let's keep it simple.
        this.email = "hpierce@example.com";
        this.name = "Hayden Pierce";
        this.message = "Hello, this is Hayden.";
        this.endpoint = 'http://daniele.codefactory.live/portfolio-email/email.php';
  }

  sendMail(){
    this.submited = true;
    if(this.contactForm.status == "INVALID"){
      console.log('invalid')
    }else{
      this.isFormVisible = false;
      this.sendEmail()
    }
   
    setTimeout(()=>this.submited = false, 3000);
    
  }


  sendEmail(){
    //You may also want to check the response. But again, let's keep it simple.
    this.http.post(this.endpoint, this.contactForm.value,  {responseType: 'text'})
        .subscribe(
            response => console.log(response),
            response => console.log(response)
        )
  }





}
