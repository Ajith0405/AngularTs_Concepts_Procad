import { Component, Input } from '@angular/core';
import { product } from 'src/app/Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  
  //@viewchild example
  @Input() productListComp:ProductListComponent = undefined;

  choosedProduct:product;
  ngOnInit(){
    this.choosedProduct = this.productListComp.selectedProduct;
  }
}
