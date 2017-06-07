import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import {ExampleAngularComponent} from './example-angular.component';
import {TabletComponent} from './tablet.component';
import {AjsTestDirective} from './ajs-test.directive';

import {AppRoutingModule} from './app-routing.module';

import {routeParamsProvider} from './ajs-upgraded-providers';

import {Phone} from './../app-ajs/core/phone/phone.service';
import {PhoneListComponent} from './../app-ajs/phone-list/phone-list.component';
import {PhoneDetailComponent} from './../app-ajs/phone-detail/phone-detail.component';

import {CheckmarkPipe} from './../app-ajs/core/checkmark/checkmark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleAngularComponent,
    TabletComponent,
    AjsTestDirective,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    AppRoutingModule
  ],
  providers: [
    Phone,
    routeParamsProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ExampleAngularComponent,
    PhoneListComponent,
    PhoneDetailComponent
  ]
})

export class AppModule {}
