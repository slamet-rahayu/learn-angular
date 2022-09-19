import { IForm } from '../types/form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  price: number = 1000;

  form: IForm = {
    email: '',
    password: '',
  };

  ngOnInit(): void {
    console.log('object');
  }

  submitLogin() {
    console.log(this.form);
  }
}
