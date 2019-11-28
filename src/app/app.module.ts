import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserContentModule} from './modules/user-content/user-content.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {FooterEmblemComponent} from './components/footer-emblem/footer-emblem.component';
import {JsonFileReaderService} from './services/json-file-reading.service';
import {CustomCarouselModule} from './modules/custom-carousel/custom-carousel.module';

const components = [
  AppComponent,
  ToolbarComponent,
  FooterEmblemComponent,

];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    UserContentModule,
    CustomCarouselModule,
  ],
  providers: [
    JsonFileReaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
