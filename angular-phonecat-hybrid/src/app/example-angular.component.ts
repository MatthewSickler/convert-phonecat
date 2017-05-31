import {Component} from '@angular/core';

@Component ({
  selector: 'example-angular-component',
  templateUrl: './example-angular.component.html'
})

export class ExampleAngularComponent {
  title: string = "This is an Angular Component inside of AngularJS!";
}
