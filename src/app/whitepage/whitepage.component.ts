import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-whitepage',
  templateUrl: './whitepage.component.html',
  styleUrls: ['./whitepage.component.scss']
})
export class WhitepageComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }
}
