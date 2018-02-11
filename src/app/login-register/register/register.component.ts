import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() eventShowLogin = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ShowLogin(){
    this.eventShowLogin.emit();
  }
}
