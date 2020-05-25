import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteVisualDaImagemComponent } from './parte-visual-da-imagem.component';

describe('ParteVisualDaImagemComponent', () => {
  let component: ParteVisualDaImagemComponent;
  let fixture: ComponentFixture<ParteVisualDaImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParteVisualDaImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteVisualDaImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
