import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../api/firebase/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  title: string = 'Login';

  disabledBtn: boolean = true;
  signUpFailed: boolean = false;
  triggerLoader: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.checkAdminAuthStatus().then(user => {
      if (user){
        this.router.navigate(['admin/dashboard'])
      }
    })
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.controls.email.value;
      const password = this.loginForm.controls.password.value;

      this.authService.signUp(email, password)
        .then((user) => {
          if (user.user?.uid) {
            this.loginForm.reset();
            this.router.navigate(['admin/dashboard'],{
              queryParams: {
                id: user.user.uid
              }
            });
          }
        })
        .catch(() => {
          this.triggerLoader = true;
          this.loginForm.reset();
          this.signUpFailed = true;
        });

    }
  }

  public onInputKeyUp() {
    this.signUpFailed = false;
    if (this.loginForm.valid) {
      this.disabledBtn = false;
    } else {
      this.disabledBtn = true;
    }
  }


}
