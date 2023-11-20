import { Component,Input } from '@angular/core';

  // Reference variable on component
import { product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // Reference variable on component
  selectedProduct:product;

// -------
  products = [
    {
      id: 1,
      name: "Laptop",
      description: "Powerful and lightweight laptop for productivity",
      price: 999.99,
      isAvailable: true,
      brand: "TechMaster",
      color: "Silver",
      imgUrl:'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/8/i/j/-original-imagthcbgurdzwuc.jpeg?q=70'
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Feature-rich smartphone with a high-resolution camera",
      price: 499.99,
      isAvailable: false,
      brand: "SmartTech",
      color: "Black",
      imgUrl:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/7/k/-original-imagtxvur9yrxvru.jpeg?q=70'
    },
    {
      id: 3,
      name: "Headphones",
      description: "Noise-canceling headphones for an immersive audio experience",
      price: 129.99,
      isAvailable: true,
      brand: "AudioPro",
      color: "Blue",
      imgUrl:'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/i/6/z/-original-imagznsrxuseynhy.jpeg?q=70'
    },
    {
      id: 4,
      name: "Fitness Tracker",
      description: "Track your fitness and health with this advanced tracker",
      price: 79.99,
      isAvailable: true,
      brand: "FitGear",
      color: "Red",
      imgUrl:'https://rukminim2.flixcart.com/image/416/416/krme93k0/smart-band-tag/e/c/u/no-free-size-n110-yes-android-ios-nns-sales-yes-original-imag5denbyabsnrm.jpeg?q=70'
    },
    {
      id: 5,
      name: "Coffee Maker",
      description: "Brew delicious coffee with this programmable coffee maker",
      price: 49.99,
      isAvailable: true,
      brand: "BrewMaster",
      color: "White",
      imgUrl:'https://rukminim2.flixcart.com/image/416/416/ku79vgw0/coffee-maker/t/v/n/hd7432-20-philips-original-imag7dzytzyyh44v.jpeg?q=70'
    }
  ];

  totalProductCount= this.products.length;

  totalProductInstock = this.products.filter(p =>p.isAvailable === true).length;

  totalProductOutStock = this.products.filter(p=> p.isAvailable === false).length;

  selectedFilter:string = 'all'

  onFilterChanged(value:string){
    this.selectedFilter = value;
    console.log(this.selectedFilter);
    
    
  }

  @Input()
  searchText:string="";


  

}
