import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-plan',
  templateUrl: './buy-plan.component.html',
  styleUrls: ['./buy-plan.component.scss'],
})
export class BuyPlanComponent implements OnInit {
  cadastroForm: FormGroup = this.formBuilder.group({
    senha: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value.senha);
    }
  }
}
