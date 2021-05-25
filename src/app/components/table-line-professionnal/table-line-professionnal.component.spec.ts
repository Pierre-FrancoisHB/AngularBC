import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLineProfessionnalComponent } from './table-line-professionnal.component';

describe('TableLineProfessionnalComponent', () => {
  let component: TableLineProfessionnalComponent;
  let fixture: ComponentFixture<TableLineProfessionnalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLineProfessionnalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLineProfessionnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
