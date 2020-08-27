import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector:    'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls:   ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      login:    ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
