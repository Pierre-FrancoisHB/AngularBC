import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchReturnComponent } from './research-return.component';

describe('ResearchReturnComponent', () => {
  let component: ResearchReturnComponent;
  let fixture: ComponentFixture<ResearchReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
