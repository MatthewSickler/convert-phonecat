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

import {Phone} from './../app-ajs/core/phone/phone.service';
import {PhoneListComponent} from './../app-ajs/phone-list/phone-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleAngularComponent,
    TabletComponent,
    AjsTestDirective,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    AppRoutingModule
  ],
  providers: [Phone],
  bootstrap: [AppComponent],
  entryComponents: [
    ExampleAngularComponent,
    PhoneListComponent
  ]
})

export class AppModule {}
