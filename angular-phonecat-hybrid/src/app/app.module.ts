import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {ExampleAngularComponent} from './example-angular.component';
import {TabletComponent} from './tablet.component';

import {AppRoutingModule} from './app-routing.module';

import {Phone} from './phone.service';
import {PhoneListComponent} from './phone-list.component';
import {PhoneDetailComponent} from './phone-detail.component';
import {AjsTestComponent} from './ajsTestDirective';

import {CheckmarkPipe} from './checkmark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleAngularComponent,
    TabletComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe,
    AjsTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Phone
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
