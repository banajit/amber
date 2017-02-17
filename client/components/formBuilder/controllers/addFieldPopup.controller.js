
'use strict';
(function (angular) {

  function addFieldPopupCtrl($scope, $mdDialog, locals, formBuilderService, queryEngineSrv) {
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
    ModulePopup.isFormValid = true;
    //parse json object
    ModulePopup.parseJson = function(inputJson) {
      if(formBuilderService.validateJson(inputJson)) {
        $scope.form.selectList = JSON.parse(inputJson);
        ModulePopup.isFormValid = true;
      }
      else {
        ModulePopup.isFormValid = false;
      }
    }

    //get list of schema variables
    ModulePopup.schemaVars = {};
    queryEngineSrv.getVariableList().then(function (data) {
      if(data.status == 404) {
        console.log('Handle Error: ', data.message);
      }
      else {
        ModulePopup.schemaVars = data;
      }
    });


    //check for valid json
    ModulePopup.validateJson = function(text) {
      return formBuilderService.validateJson(text);
    }
    $scope.addField = function() {
      $scope.form.type = $scope.formAttributes.type;
      $scope.form.key = formBuilderService.convertCamelCase($scope.form.label) + Date.now();
      $scope.form.template = $scope.formAttributes.template;
      $scope.form.field_type = $scope.formAttributes.field_type;
      if ($scope.form.field_type === 'fieldset') {
        $scope.form.fields = {
          'items': []
        }
      }
      
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

