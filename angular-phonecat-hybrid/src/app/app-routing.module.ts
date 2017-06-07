import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TabletComponent} from './tablet.component';
import{PhoneListComponent} from './phone-list.component';
import{PhoneDetailComponent} from './phone-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },
  { path: 'tablets',  component: TabletComponent },
  { path: 'phones', component: PhoneListComponent },
  { path: 'phones/:phoneId', component: PhoneDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {

}
