import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsViewsComponent } from './clients-views/clients-views.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BtnsRegisterExportClientComponent } from './btns-register-export-client/btns-register-export-client.component';
import { RegisterClientComponent } from './register-client/register-client.component';



@NgModule({
  declarations: [
    ClientsViewsComponent, BtnsRegisterExportClientComponent, BtnsRegisterExportClientComponent, RegisterClientComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    ClientsViewsComponent, BtnsRegisterExportClientComponent
  ]
})
export class MainComponentsModule { }
