import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var angular: angular.IAngularStatic;
import {downgradeInjectable} from '@angular/upgrade/static';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone {
  constructor(private http: Http) {}

  query(): Observable<PhoneData[]> {
    return this.http.get(`src/app-ajs/phones/phones.json`).map((res: Response) => res.json());
  }

  get(id: string): Observable<PhoneData> {
    return this.http.get(`src/app-ajs/phones/${id}.json`).map((res: Response) => res.json());
  }
}

angular.module('core.phone').factory('phoneService', downgradeInjectable(Phone));



// 'use strict';
//
// angular.
//   module('core.phone').
//   factory('Phone', ['$resource',
//     function($resource) {
//       return $resource('src/app-ajs/phones/:phoneId.json', {}, {
//         query: {
//           method: 'GET',
//           params: {phoneId: 'phones'},
//           isArray: true
//         }
//       });
//     }
//   ]);
