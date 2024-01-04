import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokelistComponent } from './jokeform/jokeform.component';
import { JokeComponent } from './jokeform/jokeform.component';
import { JokeFormComponent } from './jokeform/jokeform.component';

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
