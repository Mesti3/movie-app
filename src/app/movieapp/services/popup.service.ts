import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface PopupData {
    visible: boolean;
    query?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupDataSubject  = new BehaviorSubject<PopupData>({visible: false});

  get popupData$(): Observable<PopupData> {
    return this.popupDataSubject.asObservable();
  }

  openPopup(visible: boolean, query: string) {
    this.popupDataSubject.next({visible, query });
  }

  closePopup() {
    this.popupDataSubject.next({visible: false});
  }
}