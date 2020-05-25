import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumColorComponent } from './drum-color.component';

describe('DrumColorComponent', () => {
  let component: DrumColorComponent;
  let fixture: ComponentFixture<DrumColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
