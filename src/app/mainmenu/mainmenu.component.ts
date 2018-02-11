import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  userImageSrc: string = '~/resources/icons/user2424.png';
  searchImgSrc: string = '~/resources/icons/search2424.png';

  constructor() { }

  ngOnInit() {
    this.userImageSrc = '/Users/ashwin/practice programs/emp-project/presentation/src/resources/icons/user2424.png';
    this.searchImgSrc = '../resources/icons/search2424.png';
  }

}
