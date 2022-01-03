import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenst-navbar',
  templateUrl: './componenst-navbar.component.html',
  styleUrls: ['./componenst-navbar.component.scss'],
})
export class ComponenstNavbarComponent implements OnInit {
  @Input() activeMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
