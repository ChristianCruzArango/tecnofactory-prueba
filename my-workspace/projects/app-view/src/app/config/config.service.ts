import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  private configUrl = 'assets/config/env.json';

  constructor(private _http: HttpClient) { }

  getConfig(): Observable<any> {
    return this._http.get<any>(this.configUrl);
  }
}
