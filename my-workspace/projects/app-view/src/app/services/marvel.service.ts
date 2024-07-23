import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { ComicsData } from '../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient, private _configService: ConfigService) { }

  getMarvelComicsData(): Observable<ComicsData> {
    return this._configService.getConfig().pipe(
      switchMap(config => {
        const url = `${config['url-marvel']}comics?ts=${config.ts}&apikey=${config.apikey}&hash=${config.hash}`;
        return this.http.get<ComicsData>(url);
      })
    );
  }
}
