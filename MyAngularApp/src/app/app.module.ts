import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { JokeComponent } from './jokelist/jokelist.component';
import { JokeFormComponent } from './jokelist/jokelist.component';

@NgModule({
  declarations: [
    AppComponent,
    JokelistComponent,
    JokeComponent,
    JokeFormComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
