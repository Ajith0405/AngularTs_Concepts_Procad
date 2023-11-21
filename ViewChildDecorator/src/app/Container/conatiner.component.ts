import { Component , Input, ViewChild, QueryList } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

    
    searchText:string="";

    setSearchText(value:string){
        this.searchText=value;
        console.log(this.searchText);   
    }
    //@Viewchild 
    @ViewChild(ProductListComponent) productListCompon:ProductListComponent
 
}
