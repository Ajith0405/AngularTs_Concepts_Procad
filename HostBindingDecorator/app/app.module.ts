import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { setBackground } from './CustomAtributeDirectives/setBackground.directives';
import { HighlighterDirective } from './CustomAtributeDirectives/highlighter.directive';
import { HoverDirective } from './CustomAtributeDirectives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    setBackground,
    HighlighterDirective,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
