import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLastCarsComponent } from './table-last-cars.component';

describe('TableLastCarsComponent', () => {
  let component: TableLastCarsComponent;
  let fixture: ComponentFixture<TableLastCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLastCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLastCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
