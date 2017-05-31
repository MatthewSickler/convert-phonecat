import { NgModule }             from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {TabletComponent} from './tablet.component';

class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) { return !url.toString().startsWith('/phones'); }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

const routes: Routes = [
  { path: 'tablets',  component: TabletComponent }
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
