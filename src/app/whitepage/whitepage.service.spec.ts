import { TestBed } from '@angular/core/testing';

import { WhitepageService } from './whitepage.service';

describe('WhitepageService', () => {
  let service: WhitepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhitepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
