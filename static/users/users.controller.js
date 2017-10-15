/* global theApp */

(function () {
    'use strict';
    theApp.controller('UsersController', UsersController);
    
    UsersController.$inject = ['$scope'];
    function UsersController($scope) {
        $scope.init = function(){
            console.log("init users controller");
        };
        $scope.init();
    }
})();