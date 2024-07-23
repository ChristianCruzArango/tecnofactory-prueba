import { Component, Input, OnInit } from '@angular/core';
import { ComicData } from '../models/comic.model';

@Component({
  selector: 'my-app-marvel-lib-card-comic',
  templateUrl: './card-comic.component.html',
  styleUrls: ['./card-comic.component.scss']
})
export class CardComicComponent implements OnInit  {
  @Input() comic!:ComicData

  ngOnInit(): void {
    this.validateImgDescription();
  }

  validateImgDescription(){
    if(this.comic.description?.length <= 0){
      this.comic.description = 'loreamReprehenderit consequat nostrud incididunt ipsum est est sunt eu ea ex dolor dolore. Deserunt duis esse nulla duis. Consequat magna esse fugiat veniam amet minim amet deserunt ad velit velit mollit.'
    }

    if(this.comic.images?.length <= 0){
      this.comic.images.push('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png')
    }else{
      const pathUrlComplete = `${this.comic.images[0].path}.${this.comic.images[0].extension}`
      this.comic.images = [];
      this.comic.images.push(pathUrlComplete);
    }
  }

  showDetail(){

  }

}
