import { NgModule }             from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {TabletComponent} from './tablet.component';
import{PhoneListComponent} from './phone-list.component';
import{PhoneDetailComponent} from './phone-detail.component';

export class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) {
    return url.toString().startsWith('/phones') || url.toString().startsWith('/tablets') || url.toString() === '/';
  }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },
  { path: 'tablets',  component: TabletComponent },
  { path: 'phones', component: PhoneListComponent },
  { path: 'phones/:phoneId', component: PhoneDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    // use hash location strategy
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // use custom url handling strategy
    { provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy }
  ]
})

export class AppRoutingModule {

}
