import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector:    'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls:   ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username:    ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.auth.login(this.form.value).subscribe(res => {
      console.log(res);
    });
  }

}
