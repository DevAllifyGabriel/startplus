import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenst-plans',
  templateUrl: './componenst-plans.component.html',
  styleUrls: ['./componenst-plans.component.scss'],
})
export class ComponenstPlansComponent implements OnInit {
  @Input() titlePrimary?: string;
  @Input() titlePlans?: string;
  @Input() titleSecondary?: string;

  constructor() {}

  ngOnInit(): void {}
}
