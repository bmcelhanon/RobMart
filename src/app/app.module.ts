import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WormComponent } from './worm/worm.component';
import { ShardsComponent } from './shards/shards.component';
import { PerkflawComponent } from './perkflaw/perkflaw.component';

@NgModule({
  declarations: [
    AppComponent,
    WormComponent,
    ShardsComponent,
    PerkflawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
