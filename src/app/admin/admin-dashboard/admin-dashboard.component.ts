import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../api/firebase/service/auth/auth.service';
import {Admin} from '../../../api/firebase/model/admin.model';
import {getAuth} from 'firebase/auth';
import {Router} from '@angular/router';
import {fadeSlideInOut} from '../../app.animations';


@Component({
  animations: [fadeSlideInOut],
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  title: string = 'dashboard';
  admin: Admin | undefined;

  auth = getAuth();

  showContent: boolean = false;
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
    setTimeout(() => this.showContent = true, 500);
  }

  public onTrainingClick() {
    this.router.navigate(['courses'])
  }

  public onBlogClick() {
    this.router.navigate(['blog'])
  }

  public onLogOut() {
    this.authService.signOutCurrentAdmin().then(() => {
      this.router.navigate(['admin']);
    }).catch(() => {
      this.logOutError = 'Failed to logout current admin';
    })
  }

}
