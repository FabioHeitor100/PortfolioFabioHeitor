import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumDispositionComponent } from './drum-disposition.component';

describe('DrumDispositionComponent', () => {
  let component: DrumDispositionComponent;
  let fixture: ComponentFixture<DrumDispositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumDispositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumDispositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
