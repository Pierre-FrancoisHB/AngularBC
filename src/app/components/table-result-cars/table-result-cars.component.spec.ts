import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResultCarsComponent } from './table-result-cars.component';

describe('TableResultCarsComponent', () => {
  let component: TableResultCarsComponent;
  let fixture: ComponentFixture<TableResultCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableResultCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResultCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
