import { TestBed } from '@angular/core/testing';

import { SavedTimesService } from './saved-times.service';

describe('SavedTimesService', () => {
  let service: SavedTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
