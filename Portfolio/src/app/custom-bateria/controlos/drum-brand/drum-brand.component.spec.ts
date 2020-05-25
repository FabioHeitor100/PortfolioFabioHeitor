import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumBrandComponent } from './drum-brand.component';

describe('DrumBrandComponent', () => {
  let component: DrumBrandComponent;
  let fixture: ComponentFixture<DrumBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
