import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientRegisterDto } from 'src/app/dtos/client-register-dto';
import { DataAdvancedSearch } from 'src/app/dtos/data-advanced-search';
import { MainResponseDto } from 'src/app/dtos/main-response-dto';

import { ClientService } from 'src/app/services/client-service.service';

@Component({
  selector: 'register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  clientForm!: FormGroup;

  @Input()whatIs: string = "Register";
  @Output()responseEmitter: EventEmitter<DataAdvancedSearch> = new EventEmitter<DataAdvancedSearch>();

  hiddenErrorAdvancedSearch: Boolean = true;

  ngOnInit(): void {
    this.clientForm = this.loadFormRegisterClient();
  }

  constructor(private fb:FormBuilder, private clientSvc: ClientService) {}

  loadFormRegisterClient(): FormGroup {
    return this.fb.group({
      businessId: ['',  [Validators.required]],
      phone: ['',  [Validators.required]],
      email: ['',  [Validators.required, Validators.email]],
      startDate: ['',  [Validators.required]],
      endDate: ['',  [Validators.required]],
    });
  }

  saveClient(clientRegister: ClientRegisterDto): void {
    this.clientSvc.register(clientRegister).subscribe((data: MainResponseDto) => {
      console.log(data.mesagge);
    },
    (data: HttpErrorResponse) => {
      console.log(data);
    });
  }

  register(): void {
    let clientRegister = this.clientForm.value;
    if(!this.clientForm.valid) {
      this.hiddenErrorAdvancedSearch = false;
    }
    if(this.whatIs == 'Register' && this.clientForm.valid) {
      this.saveClient(clientRegister);
    } 
    if(this.whatIs == 'Search' && this.clientForm.valid) {
      console.log('This is a avanced search')
      let data = new DataAdvancedSearch(true, clientRegister);
      this.responseEmitter.emit(data);
    }
    this.clientForm.reset();
  }

}
