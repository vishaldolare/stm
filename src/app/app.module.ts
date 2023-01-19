import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadComponent } from './road/road.component';
import { TrafficSignalComponent } from './traffic-signal/traffic-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    RoadComponent,
    TrafficSignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
