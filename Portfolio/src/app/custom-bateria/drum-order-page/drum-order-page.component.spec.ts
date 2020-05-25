import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumOrderPageComponent } from './drum-order-page.component';

describe('DrumOrderPageComponent', () => {
  let component: DrumOrderPageComponent;
  let fixture: ComponentFixture<DrumOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
