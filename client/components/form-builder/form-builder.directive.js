'use strict';

(function (angular) {

angular.module('amberApp')
  .directive('formBuilder', function () {
    return {
      templateUrl: 'components/form-builder/form-builder.html',
      restrict: 'E',
      controller: 'formBuilderCtrl'
    };
  });

})(angular)

