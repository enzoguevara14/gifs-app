import { Component,ElementRef,ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor( private _gifsSerivce: GifsService){}
  searchTag(){
    const newTag =this.tagInput.nativeElement.value

    this._gifsSerivce.searchTag(newTag)

    this.tagInput.nativeElement.value=''


  }
}
