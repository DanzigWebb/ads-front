import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { WhitepageService } from './whitepage.service';
import { WhitepageFormData } from './whitepage-hand/whitepage-hand.component';
import { IWPData } from './interface';

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

  formatData(): IWPData[] {
    const output: IWPData[] = [];
    for (const key in this.whitepageData) {
      if (this.whitepageData.hasOwnProperty(key)) {
        output.push(this.whitepageData[key].data);
      }
    }

    return output;
  }

  onSubmit(): void {
    const isValid = this.isValidData();
    if (!isValid) {
      alert('Form is invalid!');
      return;
    }

    const data: IWPData[] = this.formatData();
    this.wp.generate(data).subscribe(res => {
      console.log(res);
    });
  }

  isValidData(): boolean {
    const likeArray = Array.from(Object.keys(this.whitepageData));

    console.log(this.whitepageData);

    if (likeArray.length < 4) {
      return false;
    }

    const isHasInvalidFields = likeArray.filter(key => {
      const item = this.whitepageData[key];
      return item.isValid;
    });

    return isHasInvalidFields.length === 4;
  }
}
