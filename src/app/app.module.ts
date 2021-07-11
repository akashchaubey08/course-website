import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YearlyComponent } from './components/yearly/yearly.component';
import { MontlyComponent } from './components/montly/montly.component';

@NgModule({
  declarations: [
    AppComponent,
    YearlyComponent,
    MontlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
