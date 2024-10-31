import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePageComponent } from '../page/page.component';

@Component({
  selector: 'app-custom-process',
  templateUrl: './custom-process.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProcessComponent extends BasePageComponent {}
