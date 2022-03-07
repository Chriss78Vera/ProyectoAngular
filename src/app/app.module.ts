import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WardComponent } from './prision/ward/ward.component';
import { LoginComponent } from './prision/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from './prision/reports/reports.component';
@NgModule({
  declarations: [
    AppComponent,
    WardComponent,
    LoginComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
