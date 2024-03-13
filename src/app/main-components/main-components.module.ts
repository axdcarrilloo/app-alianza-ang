import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsViewsComponent } from './clients-views/clients-views.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientsViewsComponent,
    RegisterClientComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    ClientsViewsComponent, RegisterClientComponent
  ]
})
export class MainComponentsModule { }
