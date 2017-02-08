
'use strict';
(function (angular) {

  function addFieldPopupCtrl($scope, $mdDialog, locals, formBuilderService) {
    /**
     * Controller variable
     */
    var ModulePopup = this;
    function init() {
     //Data source for select list
     //Config for select box
      ModulePopup.selectDataSourceOptions = formBuilderService.getSelectDataSources();
      $scope.form = {};
      $scope.moduleObj = locals.moduleObj;
      $scope.formAttributes = locals.fieldObj;
    }

    ModulePopup.addMore = function() {
      if(angular.isUndefined($scope.form['selectList'])) {
        $scope.form['selectList'] = [];
        $scope.form['selectList'].push(formBuilderService.getSelectList());
      }
      else {
        $scope.form['selectList'].push(formBuilderService.getSelectList());
      }
    }

    $scope.addField = function() {
      console.log('Testing', $scope.formAttributes);
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

