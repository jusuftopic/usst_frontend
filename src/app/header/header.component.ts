import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  mobileMenuOpened: boolean = false;

  @ViewChild('outerMobileMenu') outterMobileMenu: ElementRef | undefined;
  @ViewChild('innerMobileMenu') innerMobileMenu: ElementRef | undefined;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
  }

  public onOpenMobileMenu(){
    if (this.mobileMenuOpened){
      this.hideMobileMenu();
      return;
    }

    this.showMobileMenu();
  }

  private showMobileMenu(){
    this.renderer.removeClass(this.outterMobileMenu?.nativeElement,'slicknav_collapsed');
    this.renderer.addClass(this.outterMobileMenu?.nativeElement,'slicknav_open')

    this.renderer.removeClass(this.innerMobileMenu?.nativeElement, 'slicknav_hidden')
    this.renderer.removeStyle(this.innerMobileMenu?.nativeElement,'display')
    this.renderer.setStyle(this.innerMobileMenu?.nativeElement,'display', 'block')

    this.mobileMenuOpened = true;
  }

  private hideMobileMenu(){
    this.renderer.removeClass(this.outterMobileMenu?.nativeElement,'slicknav_open');
    this.renderer.addClass(this.outterMobileMenu?.nativeElement,'slicknav_collapsed')

    this.renderer.addClass(this.innerMobileMenu?.nativeElement, 'slicknav_hidden')
    this.renderer.removeStyle(this.innerMobileMenu?.nativeElement,'display')
    this.renderer.setStyle(this.innerMobileMenu?.nativeElement,'display', 'none')

    this.mobileMenuOpened = false;
  }
}
