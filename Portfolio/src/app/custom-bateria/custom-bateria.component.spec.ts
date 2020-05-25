import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBateriaComponent } from './custom-bateria.component';

describe('CustomBateriaComponent', () => {
  let component: CustomBateriaComponent;
  let fixture: ComponentFixture<CustomBateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
