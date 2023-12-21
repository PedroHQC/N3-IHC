import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselFooterComponent } from './templates/carousel-footer/carousel-footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Section2Component } from './templates/section2/section2.component';
import { Section3Component } from './templates/section3/section3.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselFooterComponent,
    Section2Component,
    Section3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
