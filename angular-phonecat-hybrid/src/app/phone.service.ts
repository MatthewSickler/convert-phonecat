import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone {
  constructor(private http: Http) {}

  query(): Observable<PhoneData[]> {
    return this.http.get(`src/assets/phones/phones.json`).map((res: Response) => res.json());
  }

  get(id: string): Observable<PhoneData> {
    return this.http.get(`src/assets/phones/${id}.json`).map((res: Response) => res.json());
  }
}



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
