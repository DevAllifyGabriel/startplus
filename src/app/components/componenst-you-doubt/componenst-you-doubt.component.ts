import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenst-you-doubt',
  templateUrl: './componenst-you-doubt.component.html',
  styleUrls: ['./componenst-you-doubt.component.scss'],
})
export class ComponenstYouDoubtComponent implements OnInit {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() paragraph?: string;
  @Input() paragraphSecond?: string;
  @Input() paragraphThird?: string;
  @Input() paragraphDedroom?: string;
  @Input() paragraphFifth?: string;

  valor: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onclick() {
    if (this.valor) {
      this.valor = false;
      console.log('false');
    } else {
      this.valor = true;
      console.log('true');
    }
  }
}
