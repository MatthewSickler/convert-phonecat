'use strict';

angular.module('testDirective', [])

.component('testAjsDirective', {
    template: `<h4>This is an AngularJS Component Directive served from a downgraded Angular Component!</h4>`,
    controller: function() {
      console.log("This is an AngularJS Component Directive served from a downgraded Angular Component!");
    },
    controllerAs: 'ctrl'
});
