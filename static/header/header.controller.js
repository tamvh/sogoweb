

/* global theApp */

theApp.controller('HeaderController', function($rootScope,$scope, $http,$cookies, $location, $window) {
    
    var path = $location.path();
    var titlePage = "Dashboard";
    switch(path){
        case '/dashboard/':
            titlePage = "Dashboard";
            break;
        case '/users/':
            titlePage = "Users";
            break;
        case '/courses/':
            titlePage = "Courses";
            break;
    }
    
    $scope.titlePage = titlePage;
    
    $scope.logout = function (){
        console.log("logout");
        $location.path('/login/'); 
    };
    $scope.changepassword = function(){
        console.log("change password");
        $location.path('/changepassword'); 
    };	
});