import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from '../models/model';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<Model[]> {
    return this.http.get<Model[]>('https://picsum.photos/v2/list')
  }

  getImageById(id: String): Observable<Model> {
    return this.http.get<Model>('https://picsum.photos/id/' + id + '/info');
  }

}
