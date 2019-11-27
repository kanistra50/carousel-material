import { NgModule } from '@angular/core';
import {UserContentComponent} from './user-content.component';
import {CommonModule} from '@angular/common';

const components = [
  UserContentComponent,
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
  ],
})
export class UserContentModule { }
