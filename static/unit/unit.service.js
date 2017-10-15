/* global theApp, sjcl */
(function () {
    'use strict';
    theApp.factory('UnitService', UnitService);

    UnitService.$inject = ['$rootScope', '$http', '$q', 'API_URL'];
    function UnitService($rootScope, $http, $q, API_URL) {
        var service = {};
        var url = API_URL;
        service.getUnitById = getUnitById;
        return service;

        function getUnitById(unitId) {
            var cmd = "get-unit-info-by-unit-id";
            var dtJSON = {
                unitId: unitId
            };
            return $http.post(url + cmd, dtJSON).then(handleSuccess, handleError('Error'));
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return {err: -2, msg: error};
            };
        }
    }
})();


