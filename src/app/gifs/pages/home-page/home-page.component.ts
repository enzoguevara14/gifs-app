import { Component } from '@angular/core';
import { GifsService } from '../../components/services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private _gifsService:GifsService){

  }
  get listGifs () {
    return this._gifsService.gifList;

  }

}
