import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenst-login-similars',
  templateUrl: './componenst-login-similars.component.html',
  styleUrls: ['./componenst-login-similars.component.scss'],
})
export class ComponenstLoginSimilarsComponent implements OnInit {
  @Input() email?: string;
  @Input() placeholder?: string;
  @Input() button?: string;
  @Input() span?: string;
  @Input() spanDois?: string;
  constructor() {}

  ngOnInit(): void {}
}
