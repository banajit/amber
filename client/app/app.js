'use strict';

(function (angular) {

var amberApp = angular.module('amberApp', [
'ngCookies',
'ngResource',
'ngSanitize',
'ngAnimate',
'ngMaterial',
'ui.router',
'ui.bootstrap',
'dndLists',
'gridster',
'vAccordion',
'elasticsearch'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $animateProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .run(['$rootScope', '$state', function ($rootScope, $state) {

  }]);
  var initInjector = angular.injector(['ng']);
  var $http = initInjector.get('$http');
  var $q = initInjector.get('$q');
  var configData = $http.get('config.json?ts=' + Date.now(), {cache: false});
  $q.all([configData]).then(function(values) {
      amberApp.constant('CONFIG', values[0].data);
      angular.element(document).ready(function() {
        angular.bootstrap(document, ['amberApp']);
      });
  });
})(angular);

