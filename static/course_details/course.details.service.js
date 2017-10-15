/* global theApp, sjcl */
(function () {
    'use strict';
    theApp.factory('CourseDetailService', CourseDetailService);

    CourseDetailService.$inject = ['$rootScope', '$http', '$q', 'API_URL'];
    function CourseDetailService($rootScope, $http, $q, API_URL) {
        var service = {};
        var url = API_URL;
        
        service.getDetailsCourse = getDetailsCourse;
        return service;

        function getDetailsCourse(course_id) {
            var cmd = "get-course-by-course-id";
            var dtJSON = {
                courseId: course_id
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





