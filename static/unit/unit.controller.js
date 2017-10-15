/* global theApp */

(function () {
    'use strict';
    theApp.controller('UnitController', UnitController);

    UnitController.$inject = ['$scope', 'UnitService', '$location'];
    function UnitController($scope, UnitService, $location) {
        $scope.init = function () {
            console.log("unit controller");
            var unit_id = getUnitId();
            UnitService.getUnitById(unit_id).then(function (res) {
                if (res.is_success === true) {
                    $scope.unitTitle = res.data.unitTitle;
                    $scope.unitDes = res.data.unitDes;
                    $scope.unitSummary = res.data.unitSummary;
                }
            });
        };
        $scope.init();
        function getUnitId() {
            var path = $location.path();
            var uid = (path.split('/').length ===3) ? (path.split('/')[2]) : -1;
            return uid;
        }
        $scope.back2courselist = function() {
            console.log('back to list couse');
            $location.path('/courses/view_card');
        };
    }
})();