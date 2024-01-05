import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products=[
    {
      id:1,
      img:'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/7/c/-original-imagsuvmc8ecfhts.jpeg?q=70',
      pName:"Running Shoe",
      price:2000,
      color:"Red",
      gender:'Male',
      size:12
    },
    {
      id:2,
      img:'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/g/u/p/l-round-neck-t-shirt-zilcon-original-imagsuyndp8tata3.jpeg?q=70',
      pName:"T-shirt",
      price:700,
      color:"yellow",
      gender:'female',
      size:"XL"
    },
    {
      id:3,
      img:'https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-kurta/i/g/o/xl-sp-2100-shopglobal-original-imaffxynprjyq5yq.jpeg?q=70',
      pName:"Women Ethnic Dress Blue Dress",
      price:999,
      color:"Peacock Blue",
      gender:'female',
      size:"XL"
    }

  ]

}
