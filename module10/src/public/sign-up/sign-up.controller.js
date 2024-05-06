(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope'];
    function SignUpController($scope) {
      $scope.completed = false;
      $scope.submitForm = function () {
        $scope.completed = true;
        localStorage.setItem("firstName", $scope.firstName);
        localStorage.setItem("lastName", $scope.lastName);
        localStorage.setItem("email", $scope.email);
        localStorage.setItem("phone", $scope.phone);
        localStorage.setItem("favoriteDish", $scope.favoriteDish);
      };
    }
    
    })();
    