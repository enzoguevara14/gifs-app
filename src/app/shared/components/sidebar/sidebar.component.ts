import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/components/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private _gifService:GifsService){

  }
  get Tags() {
   return  this._gifService.tagsHistory
  }
  searchTagHistory(tag:string){
    this._gifService.searchTag(tag)

  }


}
