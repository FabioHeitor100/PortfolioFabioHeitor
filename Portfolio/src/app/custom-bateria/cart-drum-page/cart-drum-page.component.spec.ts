import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDrumPageComponent } from './cart-drum-page.component';

describe('CartDrumPageComponent', () => {
  let component: CartDrumPageComponent;
  let fixture: ComponentFixture<CartDrumPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDrumPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDrumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
