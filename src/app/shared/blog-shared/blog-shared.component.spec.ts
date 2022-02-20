import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSharedComponent } from './blog-shared.component';

describe('BlogSharedComponent', () => {
  let component: BlogSharedComponent;
  let fixture: ComponentFixture<BlogSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
