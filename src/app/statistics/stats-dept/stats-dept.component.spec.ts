import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDeptComponent } from './stats-dept.component';

describe('StatsDeptComponent', () => {
  let component: StatsDeptComponent;
  let fixture: ComponentFixture<StatsDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
