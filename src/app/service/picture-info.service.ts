import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environment/environment';
import { Picture } from '../models/picture.model';

@Injectable({
  providedIn: 'root'
})
export class PictureInfoService {

  constructor(private http: HttpClient) { }


  getPictures (): Observable<Picture []> {

    return this.http.get<Picture[]>(`${enviroment.urlApi}`);

  }


}
