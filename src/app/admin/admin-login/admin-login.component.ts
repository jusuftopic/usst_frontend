import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from '../../../api/model/loginDto.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  title: string = "Login";

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    if (this.loginForm.valid){
      const login = this.generateLoginModel();




    }
  }

  private generateLoginModel(){
    return{
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    } as LoginModel
  }
}
