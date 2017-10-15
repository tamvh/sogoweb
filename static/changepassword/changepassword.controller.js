/* global theApp */

(function () {
    'use strict';

    theApp.controller('ChangepasswordController', ChangepasswordController);

    ChangepasswordController.$inject = ['$scope', 'LoginService', '$rootScope', '$uibModal', '$timeout', '$location'];
    function ChangepasswordController($scope, LoginService, $rootScope, $uibModal, $timeout, $location) {
        $scope.username = "tamvh";
        $scope.oldpassword = "";
        $scope.newpassword = "";
        $scope.confirmnewpassword = "";
        $scope.init = function () {
            console.log("chagne password");
        };
        $scope.init();
        
        
    }
})();