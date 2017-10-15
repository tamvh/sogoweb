/* global theApp, sjcl */
(function () {
    'use strict';
    theApp.factory('TrainerService', TrainerService);

    TrainerService.$inject = ['$http', '$q', 'API_URL'];
    function TrainerService($http, $q, API_URL) {
        var service = {};
        var url = API_URL;
        
        service.getTrainerByCourseId = getTrainerByCourseId;
        return service;

        function getTrainerByCourseId(courseId) {
            var cmd = "get-trainer-in-course";
            var dtJSON = {
                courseId: courseId
            };
            return $http.post(url + cmd, dtJSON).then(handleSuccess, handleError('Error'));
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return {is_success: false, message: error};
            };
        }
    }
})();





