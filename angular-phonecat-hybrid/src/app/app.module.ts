import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import {ExampleAngularComponent} from './example-angular.component';
import {TabletComponent} from './tablet.component';

import {AppRoutingModule} from './app-routing.module';

import {routeParamsProvider} from './ajs-upgraded-providers';

import {Phone} from './phone.service';
import {PhoneListComponent} from './phone-list.component';
import {PhoneDetailComponent} from './../app-ajs/phone-detail/phone-detail.component';
import {AjsTestComponent} from './ajsTestDirective';

import {CheckmarkPipe} from './../app-ajs/core/checkmark/checkmark.pipe';

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
    PhoneDetailComponent,
    AjsTestComponent
  ]
})

export class AppModule {}
