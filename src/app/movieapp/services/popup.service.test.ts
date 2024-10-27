import { TestBed } from '@angular/core/testing';
import { PopupService } from './popup.service';
import { delay } from 'rxjs';

describe('PopupService', () => {
  let service: PopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupService]
    });
    service = TestBed.inject(PopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially set popup data to hidden', (done) => {
    service.popupData$.subscribe(data => {
      expect(data.visible).toBeFalsy();
      expect(data.query).toBeUndefined();
      done();
    });
  });

  it('should open popup with specified query', (done) => {
    const testQuery = 'test query';
    service.openPopup(true, testQuery);

    service.popupData$.subscribe(data => {
      expect(data.visible).toBeTruthy();
      expect(data.query).toBe(testQuery);
      done();
    });
  });

  it('should close popup', (done) => {
    service.closePopup();

    service.popupData$.subscribe(data => {
      expect(data.visible).toBeFalsy();
      expect(data.query).toBeUndefined();
      done();
    });
  });
});
