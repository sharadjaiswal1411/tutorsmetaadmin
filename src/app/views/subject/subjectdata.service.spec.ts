import { TestBed } from '@angular/core/testing';

import { SubjectdataService } from './subjectdata.service';

describe('SubjectdataService', () => {
  let service: SubjectdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
