import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { NgIfDirectivesComponent } from './ng-if-directives/ng-if-directives.component';
import { NgStyleAttributeDirectiveComponent } from './ng-style-attribute-directive/ng-style-attribute-directive.component';
import { NgClassDirectivesComponent } from './ng-class-directives/ng-class-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForDirectiveComponent,
    NgIfDirectivesComponent,
    NgStyleAttributeDirectiveComponent,
    NgClassDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
