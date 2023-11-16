import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directives',
  templateUrl: './ng-if-directives.component.html',
  styleUrls: ['./ng-if-directives.component.css']
})
export class NgIfDirectivesComponent {
  searchText:string=""

  products=[
    {
      id:1,
      name:'mobile',
      price:12000,
      offerPrice:9000,
      imageUrl:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70'
    },
    {
      id:2,
      name:'Tv',
      price:15000,
      offerPrice:10000,
      imageUrl:'https://rukminim2.flixcart.com/image/416/416/xif0q/television/c/v/f/-original-imagu6jtsdzqvshg.jpeg?q=70'
    },
    {
      id:3,
      name:'Tv',
      price:14000,
      imageUrl:'https://rukminim2.flixcart.com/image/416/416/xif0q/television/c/v/f/-original-imagu6jtsdzqvshg.jpeg?q=70'
    }
  ]
}
