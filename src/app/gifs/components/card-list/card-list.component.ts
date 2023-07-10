import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/searchResponse';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input()
  gifs: Gif[]=[]

}