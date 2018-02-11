import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  showLogin: boolean = false;
  showRegister: boolean = false;
  constructor() { 
    this.showLogin = !this.showRegister;
  }

  ngOnInit() {
  }

  hideLogin(){
    this.showLogin = false;
    this.showRegister = !this.showLogin;
  }

  hideRegister(){
    this.showRegister = false;
    this.showLogin = !this.showRegister;
  }
}
