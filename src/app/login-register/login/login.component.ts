import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { fail } from 'assert';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() eventShowRegister = new EventEmitter();
  constructor() { 
  }

  ngOnInit() {
    
  }

  ShowRegister(){
    this.eventShowRegister.emit();
  }
}
