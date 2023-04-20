import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterHelperService {

  constructor(private router: Router) { }

  public navigate(path: string){
    this.router.navigate([path])
    window.scrollTo(0,0)
  }
}
