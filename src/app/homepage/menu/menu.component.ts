import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input()
  isSidebarOpened = true;
  readonly items = [
    {
      title: 'Introduction',
      isOpened: false,
      path: '/',
    },
    {
      title: 'Overview',
      isOpened: true,
      children: [
        { title: 'Quickstart', path: '/quickstart' },
        { title: 'Custom Process', path: '/custom-process' },
      ],
    },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => this.toggleCategory());

    this.toggleCategory();
  }

  toggleCategory() {
    const { firstChild } = this.route.snapshot;
    if (
      (firstChild.url && firstChild.url[1]) ||
      (firstChild.url &&
        firstChild.routeConfig &&
        firstChild.routeConfig.loadChildren)
    ) {
      const { path } = firstChild.url[0];
      const index = this.items.findIndex(
        ({ title }) => title.toLowerCase() === path,
      );
      if (index < 0) {
        return;
      }
      this.items[index].isOpened = true;
      this.items[1].isOpened = false;
    }
  }
}
