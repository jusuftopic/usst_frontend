import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterHelperService {

  constructor(private router: Router) { }

  public navigate(path: string, triggerPreloader: boolean){
    if (triggerPreloader){triggerPreloader = !triggerPreloader}
    triggerPreloader = true;
    this.router.navigate([path])
    window.scrollTo(0,0)
  }
}
