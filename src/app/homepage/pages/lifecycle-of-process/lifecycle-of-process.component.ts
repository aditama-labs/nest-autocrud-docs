import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePageComponent } from '../page/page.component';

@Component({
  selector: 'app-lifecycle-of-process',
  templateUrl: './lifecycle-of-process.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecycleOfProcessComponent extends BasePageComponent {}
