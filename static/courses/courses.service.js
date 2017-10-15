/* global theApp, sjcl */
(function () {
    'use strict';
    theApp.factory('CoursesService', CoursesService);

    CoursesService.$inject = ['$http', '$q', 'API_URL'];
    function CoursesService($http, $q, API_URL) {
        var service = {};
        var url = API_URL;
        
        service.getListCourse = getListCourse;
        service.insertCourse = insertCourse;
        service.updateShortDesc = updateShortDesc;
        service.updateDesc = updateDesc;
        return service;

        function updateDesc(courseId, courseTitle, courseDes, courseShortDes) {
            var cmd = "execute-course";
            var dtJSON = {
                "courseId":courseId,
                "courseTitle":courseTitle,
                "courseDes":courseDes,
                "courseShortDes":courseShortDes,
                "executeType":"U"
            };
            return $http.post(url + cmd, dtJSON).then(handleSuccess, handleError('Error'));
        };

        function updateShortDesc(courseId, courseTitle, courseDes,courseShortDes) {
            var cmd = "execute-course";
            var dtJSON = {
                "courseId":courseId,
                "courseTitle":courseTitle,
                "courseDes":courseDes,
                "courseShortDes":courseShortDes,
                "executeType":"U"
            };
            return $http.post(url + cmd, dtJSON).then(handleSuccess, handleError('Error'));
        };

        function insertCourse() {
            var cmd = "execute-course";
            var dtJSON = {
                "courseId":0,
                "courseTitle":"Test1",
                "courseDes":"Test1",
                "courseShortDes":"Test1",
                "executeType":"I"
            };
            return $http.post(url + cmd, dtJSON).then(handleSuccess, handleError('Error'));
        }

        function getListCourse() {
            var cmd = "get-course-by-user-type";
            var dtJSON = {
                "userId":1215,
                "userTypeId":1
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





