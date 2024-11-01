import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePageComponent } from '../page/page.component';

@Component({
  selector: 'app-quickstart',
  templateUrl: './quickstart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickstartComponent extends BasePageComponent {}
