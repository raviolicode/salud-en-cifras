'use strict';

angular
  .module('saludEnCifrasApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/listing.html',
        controller: 'ListingController'
      })
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigController'
      })
      .when('/quienes-somos', {
        templateUrl: 'views/quienes_somos.html',
        controller: 'AboutController'
      })
      .when('/comparar', {
        templateUrl: 'views/comparison.html',
        controller: 'ComparisonController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
