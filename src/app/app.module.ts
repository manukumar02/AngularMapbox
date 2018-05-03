import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { MapService } from './map.service';

@NgModule({
  declarations: [AppComponent, MapBoxComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule {}
