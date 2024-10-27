import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  title = input.required<string>();
  overView = input.required<string>();
  releaseDate= input.required<string>();

  handleClick = (e: Event) => {
    
  }

}
