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
import { QuickstartComponent } from './homepage/pages/quickstart/quickstart.component';
import { BasePageComponent } from './homepage/pages/page/page.component';
import { SharedModule } from './shared/shared.module';
import { CustomProcessComponent } from './homepage/pages/custom-process/custom-process.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    BasePageComponent,
    SocialWrapperComponent,
    // Component Related to Content
    QuickstartComponent,
    CustomProcessComponent,
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
