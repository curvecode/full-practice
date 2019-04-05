import { TestBed, inject } from '@angular/core/testing';

import { PusherService } from './pusher.service';

describe('PusherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PusherService]
    });
  });

  it('should ...', inject([PusherService], (service: PusherService) => {
    expect(service).toBeTruthy();
  }));
});
