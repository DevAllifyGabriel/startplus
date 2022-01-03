import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-finalizing-purchase',
  templateUrl: './finalizing-purchase.component.html',
  styleUrls: ['./finalizing-purchase.component.scss'],
})
export class FinalizingPurchaseComponent implements OnInit {
  cadastroForm: FormGroup = this.formBuilder.group({
    numerocartao: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(16)],
    ],
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
