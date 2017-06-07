'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        });
    }
  ]);
