'use strict';

angular.module('saludEnCifrasApp')
  .controller('ComparisonController', function ($scope, $http) {
    $http.get('data/details.json')
      .then(function(res) {
        var data = res.data;
        $scope.stats = data["stats"];
        $scope.providers = data["providers"].slice(0,2);
        var provider = $scope.providers[0];
        $scope.prices_attr = Object.keys(provider.precios);
        $scope.times_attr = Object.keys(provider.tiempos_espera);
        $scope.structure_attr = Object.keys(provider.estructura);
      });
  });

