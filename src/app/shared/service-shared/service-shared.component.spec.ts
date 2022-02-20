import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSharedComponent } from './service-shared.component';

describe('ServiceSharedComponent', () => {
  let component: ServiceSharedComponent;
  let fixture: ComponentFixture<ServiceSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
