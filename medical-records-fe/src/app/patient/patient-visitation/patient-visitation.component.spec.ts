import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitationComponent } from './patient-visitation.component';

describe('PatientVisitationComponent', () => {
  let component: PatientVisitationComponent;
  let fixture: ComponentFixture<PatientVisitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientVisitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientVisitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
