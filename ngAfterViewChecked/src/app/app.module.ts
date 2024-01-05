import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    MainCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
