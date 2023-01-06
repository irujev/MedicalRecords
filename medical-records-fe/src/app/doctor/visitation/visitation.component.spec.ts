import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitationComponent } from './visitation.component';

describe('VisitationComponent', () => {
  let component: VisitationComponent;
  let fixture: ComponentFixture<VisitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
