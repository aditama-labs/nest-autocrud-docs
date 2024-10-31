import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { BasePageComponent } from './pages/page/page.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit, OnDestroy, AfterViewInit {
  isSidebarOpened = true;
  previousWidth: number;
  contentRef: HTMLElement;
  isMarkupReady: boolean;

  private scrollSubscription: Subscription;
  private readonly scrollDebounceTime = 100;

  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => {
        if (window.innerWidth > 768) {
          return false;
        }
        this.isSidebarOpened = false;
        this.cd.detectChanges();
      });

    fromEvent(window, 'scroll').pipe(debounceTime(this.scrollDebounceTime));
  }

  ngAfterViewInit() {
    this.checkWindowWidth(window.innerWidth);
  }

  ngOnDestroy() {
    if (!this.scrollSubscription) {
      return;
    }
    this.scrollSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkWindowWidth(event.target.innerWidth);
  }

  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

  checkWindowWidth(innerWidth?: number) {
    innerWidth = innerWidth ? innerWidth : window.innerWidth;
    if (this.previousWidth !== innerWidth && innerWidth <= 768) {
      this.previousWidth = innerWidth;
      this.isSidebarOpened = false;
      this.cd.detectChanges();
    }
  }

  onRouteActivate(component: BasePageComponent) {
    if (!component) {
      return;
    }
    const nativeElement = component.nativeElement;
    if (!nativeElement) {
      return;
    }

    this.contentRef = nativeElement.querySelector('.content');

    this.cd.markForCheck();

    // Schedule check as TOC might not be rendered yet
    const adOverlapCheckDelay = 300;
    setTimeout(() => this.hideAdIfTocOverflow(), adOverlapCheckDelay);
  }

  hideAdIfTocOverflow() {
    const tocElRef = document.querySelector('.toc-wrapper ul');
    if (!tocElRef) {
      return;
    }
  }
}
