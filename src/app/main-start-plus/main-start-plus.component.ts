import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-start-plus',
  templateUrl: './main-start-plus.component.html',
  styleUrls: ['./main-start-plus.component.scss'],
})
export class MainStartPlusComponent implements OnInit {
  activeMenu: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e: any) {
    let screenSize = window.innerHeight;
    let scrollTop = e.scrollingElement.scrollTop;
    if (scrollTop >= screenSize) {
      this.activeMenu = true;
    } else {
      this.activeMenu = false;
    }
  }
}
