import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Phone, PhoneData } from './phone.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html'
})

export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(
    private route: ActivatedRoute,
    private phoneService: Phone
  ) {
    this.route.params.switchMap((params: Params) => phoneService.get(params['phoneId'])).subscribe(phone => {this.phone = phone; this.setImage(phone.images[0])});
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }

}



// 'use strict';
//
// declare var angular: angular.IAngularStatic;
// import { Phone, PhoneData } from '../core/phone/phone.service';
//
// class PhoneDetailController {
//   phone: PhoneData;
//   mainImageUrl: string;
//
//   static $inject = ['$routeParams', 'phoneService'];
//
//   constructor($routeParams: angular.route.IRouteParamsService, phoneService: Phone) {
//     let phoneId = $routeParams['phoneId'];
//     phoneService.get(phoneId).subscribe(data => {
//       this.phone = data;
//       this.setImage(data.images[0]);
//     });
//   }
//
//   setImage(imageUrl: string) {
//     this.mainImageUrl = imageUrl;
//   }
// }
//
// angular
//   .module('phoneDetail')
//   .component('phoneDetail', {
//     templateUrl: './phone-detail.template.html',
//     controller: PhoneDetailController
//   });


// Register `phoneDetail` component, along with its associated controller and template
// angular.
//   module('phoneDetail').
//   component('phoneDetail', {
//     templateUrl: './phone-detail.template.html',
//     controller: ['$routeParams', 'Phone',
//       function PhoneDetailController($routeParams, Phone) {
//         var self = this;
//         self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//           self.setImage(phone.images[0]);
//         });
//
//         self.setImage = function setImage(imageUrl) {
//           self.mainImageUrl = imageUrl;
//         };
//       }
//     ]
//   });
