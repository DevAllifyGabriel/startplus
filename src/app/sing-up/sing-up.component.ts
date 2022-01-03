import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent implements OnInit {
  cadastroForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value.email);
    }
  }
}
