import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClientService } from './client-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [ ClientService ]
})
export class ServicesModule { }
