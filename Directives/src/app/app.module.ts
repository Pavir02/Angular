import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgForGroupedExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgNonBindableExampleComponent } from './ng-non-bindable-example/ng-non-bindable-example.component';


@NgModule({
  declarations: [
    AppComponent,
    NgForExampleComponent,
    NgForGroupedExampleComponent,
    NgNonBindableExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
