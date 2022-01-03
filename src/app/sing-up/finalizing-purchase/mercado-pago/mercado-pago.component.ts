import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mercado-pago',
  templateUrl: './mercado-pago.component.html',
  styleUrls: ['./mercado-pago.component.scss'],
})
export class MercadoPAgoComponent implements OnInit {
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
