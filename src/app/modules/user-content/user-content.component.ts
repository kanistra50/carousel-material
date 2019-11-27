import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContentComponent {
  @Input() title: string;
}
