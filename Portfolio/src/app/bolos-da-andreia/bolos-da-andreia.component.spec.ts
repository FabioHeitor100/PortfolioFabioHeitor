import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosDaAndreiaComponent } from './bolos-da-andreia.component';

describe('BolosDaAndreiaComponent', () => {
  let component: BolosDaAndreiaComponent;
  let fixture: ComponentFixture<BolosDaAndreiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolosDaAndreiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolosDaAndreiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
