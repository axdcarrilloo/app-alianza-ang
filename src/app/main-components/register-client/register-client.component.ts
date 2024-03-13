import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  clientForm!: FormGroup;
  formRegisterClientHidden:Boolean = true;

  ngOnInit(): void {
    this.clientForm = this.loadFormRegisterClient();
  }

  constructor(private fb:FormBuilder) {}

  register(): void {
    let clientRegister = this.clientForm.value;
    console.log(clientRegister);
    this.actionTrueHiddenFormRegisterClient();
    this.clientForm.reset();
  }

  loadFormRegisterClient(): FormGroup {
    return this.fb.group({
      sharedKey: ['',  [Validators.required]],
      businessId: ['',  [Validators.required]],
      email: ['',  [Validators.required, Validators.email]],
      phone: ['',  [Validators.required]],
      dataAdded: ['',  [Validators.required]],
    });
  }

  actionTrueHiddenFormRegisterClient(): void {
    this.formRegisterClientHidden = true;
  }

  actionFalseHiddenFormRegisterClient(): void {
    this.formRegisterClientHidden = false;
  }

}
