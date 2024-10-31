import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuickstartComponent } from './homepage/pages/quickstart/quickstart.component';
import { IntroductionComponent } from './homepage/pages/introduction/introduction.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: IntroductionComponent,
      },
      {
        path: 'quickstart',
        component: QuickstartComponent,
        data: { title: 'Quickstart' },
      },
      {
        path: 'components',
        redirectTo: 'providers',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: !environment.production,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload',
    }),
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
