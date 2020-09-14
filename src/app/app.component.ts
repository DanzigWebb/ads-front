import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { User } from './auth/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: User = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const token = this.auth.getTokenFromStorage();
    if (token) {
      this.user = this.auth.getUserFromStorage();
    } else {
      this.router.navigate(['auth']);
    }
  }
}
