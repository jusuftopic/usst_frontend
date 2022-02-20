import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesIndividualComponent } from './courses-individual.component';

describe('CoursesIndividualComponent', () => {
  let component: CoursesIndividualComponent;
  let fixture: ComponentFixture<CoursesIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
