import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CopyButtonComponent } from './components/copy-button/copy-button.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ThemeModeToggleComponent } from './components/theme-mode-toggle/theme-mode-toggle.component';
import { TocComponent } from './components/toc/toc.component';
import { HeaderAnchorDirective } from './directives/header-anchor.directive';
import { ExtensionPipe } from './pipes/extension.pipe';
import { StorageService } from './services/storage.service';

@NgModule({
  imports: [CommonModule, ClipboardModule, MatIconModule],
  declarations: [
    ExtensionPipe,
    TabsComponent,
    TocComponent,
    HeaderAnchorDirective,
    ThemeModeToggleComponent,
    CopyButtonComponent,
  ],
  exports: [
    ExtensionPipe,
    TabsComponent,
    TocComponent,
    HeaderAnchorDirective,
    ThemeModeToggleComponent,
    CopyButtonComponent,
  ],
  providers: [StorageService],
})
export class SharedModule {}
