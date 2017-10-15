/* global posConfig, API_URL, UPLOAD_URL, RESOURCE_URL, ZALOPAY_URL, MERCHANT_CODE, URL, HTTP_TRANSPRO, angular */

var theApp = angular.module('theApp', ['ngRoute', 'ngCookies', 'ui.bootstrap', 'angular-confirm', 'ngMaterial']);

theApp.constant('API_URL', API_URL);

(function () {
    'use strict';
    theApp.config(config)
            .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    function config($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
                .when('/', {
                    controller: 'DashboardController',
                    templateUrl: 'dashboard/dashboard.view.html?v=' + posConfig.TEMPLATE_DASHBOARD_VERSION
                })
                .when('/dashboard/', {
                    controller: 'DashboardController',
                    templateUrl: 'dashboard/dashboard.view.html?v=' + posConfig.TEMPLATE_DASHBOARD_VERSION
                })
                .when('/courses/:type_view', {
                    controller: 'CoursesController',
                    templateUrl: 'courses/courses.view.html?v=' + posConfig.TEMPLATE_COURSES_VERSION
                })
                .when('/courses/detail/:course_id', {
                    controller: 'CourseDetailController',
                    templateUrl: 'course_details/course.details.view.html?v=' + posConfig.TEMPLATE_COURSE_DETAIL_VERSION
                })
                .when('/unit/:unit_id', {
                    controller: 'UnitController',
                    templateUrl: 'unit/unit.view.html?v=' + posConfig.TEMPLATE_UNIT_VERSION
                })
                .when('/users/', {
                    controller: 'UsersController',
                    templateUrl: 'users/users.view.html?v=' + posConfig.TEMPLATE_USERS_VERSION
                })
                .when('/login/', {
                    controller: 'LoginController',
                    templateUrl: 'login/login.view.html?v=' + posConfig.TEMPLATE_LOGIN_VERSION
                })
                .when('/changepassword/', {
                    controller: 'ChangepasswordController',
                    templateUrl: 'changepassword/changepassword.view.html?v=' + posConfig.TEMPLATE_CHANGEPASSWORD_VERSION
                })
                .otherwise({redirectTo: '/'});
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    }

    run.$inject = ['$rootScope', '$cookies', '$location', '$window'];
    function run($rootScope, $cookies, $location, $window) {
        $rootScope.globals = {currentUser: {}};
        $rootScope.loadHeaderTemplate = "header/header.view.html?v=" + posConfig.TEMPLATE_HEADER_VERSION;
        $rootScope.loadSidebarTemplate = "sidebar/sidebar.view.html?v=" + posConfig.TEMPLATE_SIDEBAR_VERSION;
        $rootScope.menuItemList = [
            {
                icon: "glyphicons glyphicons-home", name: "Dashboard", path: "/static/#/dashboard", active: "active"
            },
            {
                icon: "glyphicons glyphicons-book_open", name: "Courses", path: "/static/#/courses/view_card", active: ""
            },
            {
                icon: "glyphicons glyphicons-parents", name: "Users", path: "/static/#/users", active: ""
            }
        ];
    };
    
    theApp.controller('MainController', MainController);
    MainController.$inject = ['$scope'];
    function MainController($scope) {
        $scope.init = function(){
            console.log("main controller");
        };
        $scope.init();
    }
   
})();