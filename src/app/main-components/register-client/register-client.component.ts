import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  clientForm!: FormGroup;
  @Input()whatIs: string = "Register";
  @Output()responseEmitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  ngOnInit(): void {
    this.clientForm = this.loadFormRegisterClient();
  }

  constructor(private fb:FormBuilder) {}

  loadFormRegisterClient(): FormGroup {
    return this.fb.group({
      businessId: ['',  [Validators.required]],
      phone: ['',  [Validators.required]],
      email: ['',  [Validators.required, Validators.email]],
      startDate: ['',  [Validators.required]],
      endDate: ['',  [Validators.required]],
    });
  }

  register(): void {
    let clientRegister = this.clientForm.value;
    if(this.whatIs == 'Register') {
      console.log(clientRegister);
    } else {
      console.log('This is a avanced search')
      this.responseEmitter.emit(true);
    }
    this.clientForm.reset();
  }

}
