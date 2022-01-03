import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.scss'],
})
export class PayPalComponent implements OnInit {
  cadastroForm: FormGroup = this.formBuilder.group({
    cadastroCPF: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value.cadastroCPF);
    }
  }
}
