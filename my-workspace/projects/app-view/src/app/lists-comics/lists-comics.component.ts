import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { ComicsData } from '../models/comic.model';
import { ComicData } from 'my-app-marvel';

@Component({
  selector: 'app-lists-comics',
  templateUrl: './lists-comics.component.html',
  styleUrls: ['./lists-comics.component.scss'],
})
export class ListsComicsComponent implements OnInit {
  public ready:boolean = false;
  public comics!:ComicData[];

  constructor(private _marvelService:MarvelService) { }

  ngOnInit() {
    this.getDataMarvelComics();
  }

  getDataMarvelComics(){
    this._marvelService.getMarvelComicsData().subscribe((comics:ComicsData) => {
      this.ready = true;
      this.comics = (comics.data.results as ComicData[]);
    })
  }

}
