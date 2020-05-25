import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectTabComponent } from './custom-select-tab.component';

describe('CustomSelectTabComponent', () => {
  let component: CustomSelectTabComponent;
  let fixture: ComponentFixture<CustomSelectTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSelectTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
