import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTrainingComponent } from './next-training.component';

describe('NextTrainingComponent', () => {
  let component: NextTrainingComponent;
  let fixture: ComponentFixture<NextTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
