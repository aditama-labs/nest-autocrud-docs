import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialWrapperComponent } from './common/social-wrapper/social-wrapper.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HeaderComponent } from './homepage/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuItemComponent } from './homepage/menu/menu-item/menu-item.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { ControllersComponent } from './homepage/pages/controllers/controllers.component';
import { CustomDecoratorsComponent } from './homepage/pages/custom-decorators/custom-decorators.component';
import { ExceptionFiltersComponent } from './homepage/pages/exception-filters/exception-filters.component';
import { FirstStepsComponent } from './homepage/pages/first-steps/first-steps.component';
import { GuardsComponent } from './homepage/pages/guards/guards.component';
import { InterceptorsComponent } from './homepage/pages/interceptors/interceptors.component';
import { IntroductionComponent } from './homepage/pages/introduction/introduction.component';
import { ModulesComponent } from './homepage/pages/modules/modules.component';
import { BasePageComponent } from './homepage/pages/page/page.component';
import { PipesComponent } from './homepage/pages/pipes/pipes.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    IntroductionComponent,
    FirstStepsComponent, //
    ControllersComponent, //
    BasePageComponent,
    ModulesComponent, //
    PipesComponent, //
    ExceptionFiltersComponent, //
    GuardsComponent, //
    InterceptorsComponent, //
    CustomDecoratorsComponent, //
    SocialWrapperComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
