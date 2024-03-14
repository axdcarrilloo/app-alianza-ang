import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsViewsComponent } from './clients-views/clients-views.component';
import { BtnsRegisterExportClientComponent } from './btns-register-export-client/btns-register-export-client.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ServicesModule } from '../services/services.module';



@NgModule({
  declarations: [
    ClientsViewsComponent, BtnsRegisterExportClientComponent, BtnsRegisterExportClientComponent, RegisterClientComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ServicesModule
  ],
  exports: [
    ClientsViewsComponent, BtnsRegisterExportClientComponent
  ]
})
export class MainComponentsModule { }
