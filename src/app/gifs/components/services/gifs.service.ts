import { Injectable } from '@angular/core';
import {HttpClient,HttpParams } from '@angular/common/http'
import { Gif, SearchResponse } from '../../interfaces/searchResponse';

const apiKey='RP8o5A2tGp6gewPSABNiwveYTGNFvGCi'
const URL = 'https://api.giphy.com/v1/gifs'

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _tagsHistory: string[]=[];
  gifList: Gif[]=[]



  constructor(private _http:HttpClient ) {
    this.loadLocalStorage()




   }

  get tagsHistory(){
    return [...this._tagsHistory]
  }


  private organizeHistory(tag:string){
    tag=tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory=this._tagsHistory.filter((oldTags)=> oldTags!== tag)

    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory=this._tagsHistory.splice(0,10)
    this.saveLocalStrorage()
  }

  private saveLocalStrorage(){
    localStorage.setItem('history',JSON.stringify( this._tagsHistory))
  }

  private loadLocalStorage(){
    if(!localStorage.getItem('history')) return
    this._tagsHistory =JSON.parse( localStorage.getItem('history')!)

    if(this._tagsHistory.length>0)
    this.searchTag(this._tagsHistory[0])
  }

  searchTag(tag:string){
    if(tag.length=== 0) return;
    this.organizeHistory(tag)

    const params = new HttpParams()
    .set('api_key', apiKey)
    .set('q', tag)
    .set('limit', 10)


    this._http.get<SearchResponse>(`${URL}/search`,{params}).subscribe(
      (resp)=>{
        this.gifList= resp.data

      }
      );

  }
}
