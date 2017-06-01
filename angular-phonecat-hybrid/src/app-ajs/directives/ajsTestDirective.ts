'use strict';

declare var angular: angular.IAngularStatic;

const opts = {
    template: `<h4>This is an AngularJS Component Directive served from a downgraded Angular Component!</h4>`,
    controller: function() {
      console.log("This is an AngularJS Component Directive served from a downgraded Angular Component!");
    },
    controllerAs: 'ctrl'
}

angular.module('testDirective', [])

.component('testAjsDirective', opts);
