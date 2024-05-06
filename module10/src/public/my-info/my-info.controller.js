(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['$scope'];
    function MyInfoController($scope) {
      $scope.firstName = localStorage.getItem("firstName");
      $scope.lastName = localStorage.getItem("lastName");
      $scope.email = localStorage.getItem("email");
      $scope.phone = localStorage.getItem("phone");
      $scope.favoriteDish = localStorage.getItem("favoriteDish");
    }
    
    })();