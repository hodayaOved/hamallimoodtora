import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/home.component';
import { GmaraPageComponent } from './gmara-page/gmara-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GmaraPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }