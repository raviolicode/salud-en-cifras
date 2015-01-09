'use strict';

angular.module('saludEnCifrasApp')
  .controller('ComparisonController', function ($scope, $http) {
    $http.get('data/details.json')
      .then(function(res) {
        var data = res.data;
        $scope.stats = data["stats"];
        $scope.providers = data["providers"].slice(0,20);
        var provider = $scope.providers[0];
        $scope.prices_attr = Object.keys(provider.precios);
        $scope.times_attr = Object.keys(provider.tiempos_espera);
        $scope.structure_attr = Object.keys(provider.estructura);
        $scope.resources_attr = Object.keys(provider.rrhh);
        $scope.selectedProvidersList = $scope.providers.map(function(provider) {
          return {
            id: provider.id,
            name: provider.estructura.nombre_abreviado,
            info: provider,
            ticked: false }
        });

        $scope.$watchCollection('selectedProviders', function(val) {
          console.log("selected Providers changed", val);
        });
      });

  });

