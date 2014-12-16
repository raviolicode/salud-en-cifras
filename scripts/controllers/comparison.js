'use strict';

angular.module('saludEnCifrasApp')
  .controller('ComparisonController', function ($scope, $http) {
    $http.get('data/details.json')
      .then(function(res) {
        $scope.stats = res.data[0]["stats"];
        $scope.providers = res.data.slice(1,4);
        $scope.attributes = [
          {
            "group": "estructura",
            "name": "nombre_completo",
            "description": "Nombre Completo"
          }, {
            "group": "precios",
            "name": "ticket_general_fonasa",
            "description": "Ticket Medico General FONASA"
          }, {
            "group": "precios",
            "name": "ticket_general",
            "description": "Ticket Medico General"
          }
        ];
        // console.log("nombre: ", $scope.providers[0]);
        // console.log("nombre: ", $scope.providers[0]['estructura'][$scope.criteria[0].name]);
      });
  });

