import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent {

  productsName:string[] =['Mobile','TV','Washing M0achine','Mixer','Gas Stove'];
  mainMenu:string[]=['Home','Products','Sale','Contact'];

   products =[
    {
      id: 1,
      name: "Example Product 1",
      description: "This is a sample product description.",
      brand: "ABC Brand",
      gender: "Male",
      category: "Clothing",
      size: "L",
      color: ['blue','black','red'],
      price: 29.99,
      isAvailable: true,
      item_left: 10,
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
    },
    {
      id: 2,
      name: "Example Product 2",
      description: "This is a sample product description.",
      brand: "ABC Brand",
      gender: "Male",
      category: "Clothing",
      size: "L",
      color: ['blue','black','red'],
      price: 29.99,
      isAvailable: true,
      item_left: 10,
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
    },
    {
      id: 3,
      name: "Example Product 3",
      description: "This is a sample product description.",
      brand: "ABC Brand",
      gender: "Male",
      category: "Clothing",
      size: "L",
      color: ['blue','black','red'],
      price: 29.99,
      isAvailable: true,
      item_left: 10,
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
    }
   ]

}
