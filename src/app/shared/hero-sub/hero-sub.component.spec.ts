import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSubComponent } from './hero-sub.component';

describe('HeroSubComponent', () => {
  let component: HeroSubComponent;
  let fixture: ComponentFixture<HeroSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
