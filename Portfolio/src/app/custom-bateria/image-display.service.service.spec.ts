import { TestBed } from '@angular/core/testing';

import { ImageDisplay } from './image-display.service.service';

describe('ImageDisplay.ServiceService', () => {
  let service: ImageDisplay;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageDisplay);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
