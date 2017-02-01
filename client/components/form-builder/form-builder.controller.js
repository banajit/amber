
'use strict';
(function (angular) {

  function formBuilderCtrl(formBuilderService, $scope) {
    /**
     * Controller variable
     */
    var ctrl = this;
    formBuilderService.getFieldConfig().then(function (data) {
        $scope.formFields = data.data;
    });
  }

  angular.module('amberApp')
    .controller('formBuilderCtrl', formBuilderCtrl);
})(angular);



