import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserContentModule} from './modules/user-content/user-content.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {FooterEmblemComponent} from './components/footer-emblem/footer-emblem.component';

const components = [
  AppComponent,
  ToolbarComponent,
  FooterEmblemComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    UserContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
