import {Component} from '@angular/core';
import {Phone, PhoneData} from './phone.service';

@Component ({
  selector: 'phone-list',
  templateUrl: 'phone-list.template.html'
})

export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;

  constructor(phoneService: Phone) {
    phoneService.query().subscribe(phones => {
      this.phones = phones
    });
    this.orderProp = 'age';
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp]) {
            return -1;
          } else if ([b[this.orderProp] < a[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
    }
    return phones;
  }

}


// 'use strict';
//
// import {ExampleAngularComponent} from './../../app/example-angular.component';
// import {downgradeComponent} from '@angular/upgrade/static';
// declare var angular: angular.IAngularStatic;
// import {Phone, PhoneData} from './../core/phone/phone.service';
//
// class PhoneListController {
//   phones: PhoneData[];
//   orderProp: string;
//
//   static $inject = ['phoneService'];
//   constructor(phoneService: Phone) {
//     phoneService.query().subscribe(phones => {
//       this.phones = phones;
//     });
//     this.orderProp = 'age';
//   }
// }
//
// angular
//   .module('phoneList')
//   .component('phoneList', {
//     templateUrl: 'phone-list.template.html',
//     controller: PhoneListController
//   })
//   .directive(
//     'exampleAngularComponent',
//     downgradeComponent({component: ExampleAngularComponent}) as angular.IDirectiveFactory
//   );



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
