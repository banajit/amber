
'use strict';
(function (angular) {

  function addFieldPopupCtrl($scope, $mdDialog, locals) {
    /**
     * Controller variable
     */
    function init() {
      $scope.form = {};
      $scope.moduleObj = locals.moduleObj;
      $scope.formAttributes = locals.fieldObj;
    }

    $scope.addField = function() {
      console.log('Testing');
      $scope.form.type = $scope.formAttributes.type;
      $scope.form.template = $scope.formAttributes.template;
      $scope.returnData = {
        'form': $scope.form
      };
      $mdDialog.hide($scope.returnData);
    };
    init();
  }

  angular.module('amberApp')
    .controller('addFieldPopupCtrl', addFieldPopupCtrl);
})(angular);

