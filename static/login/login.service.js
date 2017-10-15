/* global theApp, sjcl */
(function () {
    'use strict';
    theApp.factory('LoginService', LoginService);

    LoginService.$inject = ['$rootScope', '$http', '$q', 'API_URL'];
    function LoginService($rootScope, $http, $q, API_URL) {
        var service = {};
        var url = API_URL;
        
        service.login = login;
        return service;

        function login(u, p) {
            var cmd = "login";
            var dtJSON = {
                u: u,
                p: p
            };
            
            var dt = JSON.stringify(dtJSON);
            var data = $.param({
                cm: cmd,
                dt: dt
            });
            return $http.post(url + cmd, data).then(handleSuccess, handleError('Error'));
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
