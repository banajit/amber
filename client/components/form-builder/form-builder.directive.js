'use strict';

(function (angular) {

angular.module('amberApp')
  .directive('formBuilder', function () {
    return {
      templateUrl: 'components/form-builder/form-builder.html',
      restrict: 'E',
      controller: 'formBuilderCtrl',
      link: function (scope) {
        scope.formFields = {};
        scope.formHTML = [];
        scope.fieldObject = {};
        scope.gridsterOptions = {
          margins: [20, 20],
          outerMargin: true,
          rowHeight: 90,
          columns: 4,
          draggable: {
            enabled: true
          }
        };
        scope.module = {
          'title': "",
          'description': "",
          'form': []
        };
      }
    };
  });

})(angular)

