/* global theApp */

(function () {
    'use strict';
    theApp.controller('DashboardController', DashboardController);
    
    DashboardController.$inject = ['$scope'];
    function DashboardController($scope) {
        $scope.init = function(){
            console.log("hello");
        };
        $scope.init();
    }
})();