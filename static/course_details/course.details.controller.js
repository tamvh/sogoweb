/* global theApp */

(function () {
    'use strict';
    theApp.controller('CourseDetailController', CourseDetailController);
    
    CourseDetailController.$inject = ['$scope', 'CourseDetailService', '$location'];
    function CourseDetailController($scope, CourseDetailService, $location) {
        $scope.listcourse = [];
        $scope.view_type = true;
        $scope.init = function(){
            console.log("init course detail controller");
            var course_id = getCourseId();
            console.log('course id: ' + course_id);
            CourseDetailService.getDetailsCourse(course_id).then(function (res) {
                console.log(JSON.stringify(res));
                if (res.is_success === true) {
                    $scope.courseTitle = res.data.courseTitle;
                    $scope.courseShortDes = res.data.courseShortDes;
                    $scope.courseDes = res.data.courseDes;
                }
            });
        };
        $scope.init();
        
        $scope.back2courselist = function() {
            console.log('back to course list');
            $location.path('/courses/view_list');
        };
        function getCourseId() {
            var path = $location.path();
            var uid = (path.split('/').length ===4) ? (path.split('/')[3]) : -1;
            return uid;
        }
    }
})();