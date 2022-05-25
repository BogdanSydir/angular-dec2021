import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService:AuthService, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void{
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login(): void { //викликається по кліку кнопки
    this.authService.login(this.form.getRawValue()).subscribe(value => { //value це токени що віддає сервер як відповідь на логінацію
      console.log(value);
      this.authService.setToken(value) //передаємо токени (access і refresh) у сервіс
      this.router.navigate(['cars'])

    })
  }
}
