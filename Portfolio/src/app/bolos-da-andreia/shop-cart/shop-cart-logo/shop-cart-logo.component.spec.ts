import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartLogoComponent } from './shop-cart-logo.component';

describe('ShopCartLogoComponent', () => {
  let component: ShopCartLogoComponent;
  let fixture: ComponentFixture<ShopCartLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCartLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCartLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
