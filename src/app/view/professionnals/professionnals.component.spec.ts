import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionnalsComponent } from './professionnals.component';

describe('ProfessionnalsComponent', () => {
  let component: ProfessionnalsComponent;
  let fixture: ComponentFixture<ProfessionnalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionnalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionnalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
