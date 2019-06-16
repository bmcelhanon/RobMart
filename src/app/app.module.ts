import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WormComponent } from './worm/worm.component';
import { ShardsComponent } from './shards/shards.component';

@NgModule({
  declarations: [
    AppComponent,
    WormComponent,
    ShardsComponent
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
