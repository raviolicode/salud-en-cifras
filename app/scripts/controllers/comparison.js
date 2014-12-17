'use strict';

angular.module('saludEnCifrasApp')
  .controller('ComparisonController', function ($scope, $http) {
    $http.get('data/details.json')
      .then(function(res) {
        $scope.stats = res.data["stats"];
        $scope.providers = res.data.["providers"];
        var provider = $scope.providers[0];
        $scope.prices_attr = Object.keys(provider.precios);
        $scope.times_attr = Object.keys(provider.tiempos_espera);
        $scope.pepe = ["precios", "lele"];
        // console.log($scope.providers[0]);
        // $scope.groups = Object.keys();
        // $scope.groups.splice(0, 1);
        // $scope.attributes = Object.keys($scope.providers[0][$scope.groups[0]]);
        // console.log($scope.attributes);
        // console.log($scope.providers[0][$scope.groups[0]]);
        // $scope.structure = {
        //   "precios": ["ticket_general_fonasa", "ticket_general"],
        //   "estructura": ["nombre_completo"]
        // }
        // $scope.attributes = [
        //   {
        //     "group": "estructura",
        //     "name": "nombre_completo",
        //     "description": "Nombre Completo"
        //   }, {
        //     "group": "precios",
        //     "name": "ticket_general_fonasa",
        //     "description": "Ticket Medico General FONASA"
        //   }, {
        //     "group": "precios",
        //     "name": "ticket_general",
        //     "description": "Ticket Medico General"
        //   }
        // ];
        // console.log("nombre: ", $scope.providers[0]);
        // console.log("nombre: ", $scope.providers[0]['estructura'][$scope.criteria[0].name]);
      });
  });

