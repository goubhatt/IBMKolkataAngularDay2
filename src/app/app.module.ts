import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';

// Service imports
import { ActorService } from './services/actor.service';

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
