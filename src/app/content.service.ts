import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, bindNodeCallback } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getContent(id: string): Observable<string>{
    return this.http.get('/assets/html/' + id + '.html', {responseType: 'text'}) as Observable<string>;
  }
}
