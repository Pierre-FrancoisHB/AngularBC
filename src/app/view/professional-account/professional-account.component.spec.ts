import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAccountComponent } from './professional-account.component';

describe('ProfessionalAccountComponent', () => {
  let component: ProfessionalAccountComponent;
  let fixture: ComponentFixture<ProfessionalAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
