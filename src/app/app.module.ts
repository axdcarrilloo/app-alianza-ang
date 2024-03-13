import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { MainComponentsModule } from './main-components/main-components.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuMainComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, MainComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
