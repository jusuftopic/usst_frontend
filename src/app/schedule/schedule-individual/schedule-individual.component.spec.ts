import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIndividualComponent } from './schedule-individual.component';

describe('ScheduleIndividualComponent', () => {
  let component: ScheduleIndividualComponent;
  let fixture: ComponentFixture<ScheduleIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
