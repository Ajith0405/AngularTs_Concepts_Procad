import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Container/product-list/product-list.component';
import { SearchComponent } from './Container/search/search.component';
import { ProductComponent } from './Container/product/product.component';
import { FilterComponent } from './Container/product-list/filter/filter.component';
import { ContainerComponent } from './Container/conatiner.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './Container/product-detail/product-detail.component';
import { ViweChiildrenDemoComponent } from './viwe-chiildren-demo/viwe-chiildren-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchComponent,
    ProductComponent,
    FilterComponent,
    ContainerComponent,
    ProductDetailComponent,
    ViweChiildrenDemoComponent
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
