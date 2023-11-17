import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string='';

//Non-related component communication
  //1. create an event
  @Output()
  SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged(){
    this.SearchTextChanged.emit(this.searchText)
  }


  //---
  updateSearchText(inputST:HTMLInputElement){
    this.searchText = inputST.value;
    this.onSearchTextChanged();
    
  }

}
