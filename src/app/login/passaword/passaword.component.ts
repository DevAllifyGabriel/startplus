import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passaword',
  templateUrl: './passaword.component.html',
  styleUrls: ['./passaword.component.scss'],
})
export class PassawordComponent implements OnInit {
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
