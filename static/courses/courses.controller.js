/* global theApp */

(function () {
    'use strict';
    theApp.controller('CoursesController', CoursesController);

    CoursesController.$inject = ['$scope', '$location', 'CoursesService', 'TrainerService'];
    function CoursesController($scope, $location, CoursesService, TrainerService) {
        $scope.listcourse = [];
        $scope.view_type = true;
        $scope.endbleCourseTitle = true;
        var saveIndex = 0;
        $scope.init = function () {
            console.log("init courses controller");
            var path = $location.path();
            if (path === '/courses/view_card') {
                $scope.view_type = true;
            } else {
                $scope.view_type = false;
            }
            CoursesService.getListCourse().then(function (res) {
                if (res.is_success === true) {
                    $scope.listcourse = res.data;
                    var trainer_id;
                    var data_trainer_res = [];
                    for (var i in $scope.listcourse) {
                        $scope.listcourse[i].cindex = i; 
                        $scope.listcourse[i].disabledCourseTitle = false;
                        $scope.listcourse[i].iconCourseTitle = "glyphicons glyphicons-edit";
//                        trainer_id = $scope.listcourse[i].courseId;
                        
//                        TrainerService.getTrainerByCourseId(trainer_id).then(function (res_trainer) {
//                            if (res_trainer.is_success === true) {
//                                data_trainer_res = res_trainer.data;
////                                console.log(JSON.stringify(data_trainer_res));
//                                $scope.listcourse[i].data_trainer_res = data_trainer_res;
//
//                            } else {
//                                $scope.listcourse[i].data_trainer_res = [];
//                            }
//                        });
                    }
                    console.log(JSON.stringify($scope.listcourse));
                }
            });
        };
        $scope.init();
        
        $scope.editCourseTitle = function(cindex) {
            console.log('edit course title');
            $scope.endbleCourseTitle = false;
            $scope.listcourse[cindex].iconCourseTitle = "glyphicon glyphicon-save";
            $scope.listcourse[cindex].disabledCourseTitle = false;
        };

        $scope.viewcard = function () {
            console.log("view card");
            $scope.view_type = true;
            $location.path('/courses/view_card');
        };

        $scope.viewlist = function () {
            console.log("view list");
            $scope.view_type = false;
            $location.path('/courses/view_list');
        };

        $scope.getAllTrainer = function () {
            console.log("get all trainer");

        };

        $scope.addnewcourse = function () {
            console.log("add new course");
            CoursesService.insertCourse().then(function (res) {
                $scope.init();
            });
        };
        
        $scope.updateShortDesc = function(item) {
            $scope.item = item;
            var short_desc = $scope.item.courseShortDes;
            console.log("short_desc: " + short_desc);
            console.log("item update short Desc: " + JSON.stringify(item));
            CoursesService.updateShortDesc(item.courseId, item.courseTitle, item.courseDes, short_desc).then(function(res){
                $scope.init();
            });
        };
        $scope.updateDescription = function(item) {
            $scope.item = item;
            var desc = $scope.item.courseDes;
            console.log("desc: " + desc);
            console.log("item update desc: " + JSON.stringify(item));
            CoursesService.updateDesc(item.courseId, item.courseTitle, desc, item.courseShortDes).then(function(res){
                $scope.init();
            });
        };
        
        $scope.viewdetails = function(item) {
            console.log('view details course');
            if(saveIndex === 0) {
                $location.path('/courses/detail/' + item.courseId);
                
            }
        };
    }
})();