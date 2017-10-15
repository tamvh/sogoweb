/* global theApp */

(function () {
    'use strict';

    theApp.controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'LoginService', '$rootScope', '$uibModal', '$timeout', '$location'];
    function LoginController($scope, LoginService, $rootScope, $uibModal, $timeout, $location) {
        $scope.username = "";
        $scope.password = "";
        $scope.init = function () {
            console.log("hello");
        };
        $scope.init();
        
        $scope.login = function() {
            var username = $scope.username;
            var password = $scope.password;
            console.log(username);
            console.log(password);
            $location.path('/dashboard'); 
        };
    }
})();