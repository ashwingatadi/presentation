import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEmplComponent } from './stats-empl.component';

describe('StatsEmplComponent', () => {
  let component: StatsEmplComponent;
  let fixture: ComponentFixture<StatsEmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsEmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
