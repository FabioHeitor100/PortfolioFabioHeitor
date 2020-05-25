import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumStickTypeComponent } from './drum-stick-type.component';

describe('DrumStickTypeComponent', () => {
  let component: DrumStickTypeComponent;
  let fixture: ComponentFixture<DrumStickTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumStickTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumStickTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
