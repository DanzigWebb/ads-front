import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWPData } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhitepageService {

  constructor(
    private http: HttpClient
  ) {
  }

  generate(data: IWPData[]): Observable<any> {
    return this.http.post('http://localhost:3000/whitepage', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}
