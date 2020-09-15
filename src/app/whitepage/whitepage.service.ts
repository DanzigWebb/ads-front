import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWPData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class WhitepageService {

  constructor(
    private http: HttpClient
  ) {
  }

  generate(data: IWPData): void {
    this.http.post('http://localhost:3000/whitepage', data);
  }
}
