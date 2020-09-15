import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { WhitepageService } from './whitepage.service';
import { WhitepageFormData } from './whitepage-hand/whitepage-hand.component';

export interface FormData {
  [key: string]: WhitepageFormData;
}

@Component({
  selector:    'app-whitepage',
  templateUrl: './whitepage.component.html',
  styleUrls:   ['./whitepage.component.scss']
})
export class WhitepageComponent implements OnInit {

  whitepageData: FormData = {};

  constructor(
    public auth: AuthService,
    public wp: WhitepageService
  ) {
  }

  ngOnInit(): void {
  }

  setData(val: WhitepageFormData, num): void {
    this.whitepageData[num] = val;
  }
}
