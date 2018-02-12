import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  userImg2020: string;
  searchImg2020: string;

  constructor() { }

  ngOnInit() {
    this.userImg2020 = 'assets/images/user2020.png';
    this.searchImg2020 = 'assets/images/search2020.png';
  }

}
