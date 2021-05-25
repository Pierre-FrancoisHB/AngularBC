import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProfessionnalComponent } from './table-professionnal.component';

describe('TableProfessionnalComponent', () => {
  let component: TableProfessionnalComponent;
  let fixture: ComponentFixture<TableProfessionnalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProfessionnalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProfessionnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
