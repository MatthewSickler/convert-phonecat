'use strict';

import {ExampleAngularComponent} from './../../app/example-angular.component';
import {downgradeComponent} from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;
import {Phone, PhoneData} from './../core/phone/phone.service';

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  static $inject = ['phoneService'];
  constructor(phoneService: Phone) {
    phoneService.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}

angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list.template.html',
    controller: PhoneListController
  })
  .directive(
    'exampleAngularComponent',
    downgradeComponent({component: ExampleAngularComponent}) as angular.IDirectiveFactory
  );



// Register `phoneList` component, along with its associated controller and template
// angular.
//   module('phoneList').
//   component('phoneList', {
//     templateUrl: './phone-list.template.html',
//     controller: ['Phone',
//       function PhoneListController(Phone) {
//         this.phones = Phone.query();
//         this.orderProp = 'age';
//       }
//     ]
//   });
