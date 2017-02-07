'use strict';

(function (angular) {

angular.module('amberApp')
  .directive('formBuilder', function () {
    return {
      templateUrl: 'components/formBuilder/views/formBuilder.html',
      restrict: 'E',
      controller: 'formBuilderCtrl'
    };
  });

})(angular)

