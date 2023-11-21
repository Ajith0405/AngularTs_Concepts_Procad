import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
  
  @ViewChild('searchInput') searchInput:ElementRef
  updateSearchText(){
    this.searchText = this.searchInput.nativeElement.value;
    this.onSearchTextChanged();
    
  }

}
