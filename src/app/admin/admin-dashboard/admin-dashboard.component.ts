import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../api/firebase/service/auth.service';
import {Admin} from '../../../api/firebase/model/admin.model';
import {getAuth} from 'firebase/auth';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(10px)'}),
        animate('1000ms', style({opacity: 1, transform: 'translateY(0)'}))
      ])
    ])
  ],
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  title: string = 'dashboard';
  admin: Admin | undefined;

  auth = getAuth();

  showContent: boolean = true;
  logOutError: string | undefined;

  constructor(private authService: AuthService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.authService.checkAdminAuthStatus().then((user) => {
      if (user?.uid) {
        this.authService.getAdminById(user.uid).then((admin) => {
          if (admin) {
            this.admin = admin
          }})
      }
    })

  }

  public onTrainingClick() {
    this.router.navigate(['courses'])
  }

  public onBlogClick() {
    this.router.navigate(['blog'])
  }

  public onLogOut() {
    this.authService.signOutCurrentAdmin().then(() => {
      this.router.navigate(['admin/login']);
    }).catch(() => {
      this.logOutError = 'Failed to logout current admin';
    })
  }

}
