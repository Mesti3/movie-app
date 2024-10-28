import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { Observable } from 'rxjs';
import { PopupComponent } from '../../components/pop-up/pop-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PopupComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  protected popupData$: Observable<{  visible: boolean,query?: string} | null>;

  constructor(private popupService: PopupService) {
  }


  protected closePopup() {
    this.popupService.closePopup();
  }

  ngOnInit(): void {
    this.popupData$ = this.popupService.popupData$;
  }
}
