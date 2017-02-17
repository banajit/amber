
'use strict';
(function (angular) {

  function formBuilderCtrl(formBuilderService, $scope, $mdDialog, queryEngineSrv) {
    /**
     * Controller variable
     */
    var ctrl = this;
    formBuilderService.getFieldConfig().then(function (data) {
        $scope.formFields = data.data;
    });
    $scope.formFields = {};
    $scope.formHTML = [];
    $scope.fieldObject = {};
    $scope.gridsterOptions = {
      margins: [20, 20],
      outerMargin: true,
      rowHeight: 90,
      columns: 4,
      draggable: {
        enabled: true
      }
    };
    $scope.module = {
      'title': "",
      'description': "",
      'form': {
        'fields': [
          
        ]
      }
    };
    $scope.rangeOperators = {
      '>': '>',
      '<': '<',
      '=': '=',
      '>=': '>=',
      '<=': '<=',
      'range': 'Range'
    };
    $scope.addFormField = function(index, obj) {
      if (index !== -1) {
        $mdDialog.show({
          controller: 'addFieldPopupCtrl',
          controllerAs: 'ModulePopup',
          templateUrl: 'components/formBuilder/views/addFieldPopup.html',
          parent: angular.element(document.body),
          locals: {fieldObj: obj, moduleObj: $scope.module},
          clickOutsideToClose: true
        })
        .then(function(data) {
          $scope.fieldObject = data.form;
          $scope.module.form.fields.push($scope.fieldObject);
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
      }
    };
    
    $scope.addFieldsetField = function(index, item, list) {
      $mdDialog.show({
        controller: 'addFieldPopupCtrl',
        controllerAs: 'ModulePopup',
        templateUrl: 'components/formBuilder/views/addFieldPopup.html',
        parent: angular.element(document.body),
        locals: {fieldObj: item, moduleObj: $scope.module},
        clickOutsideToClose: true
      })
      .then(function(data) {
        $scope.fieldObject = data.form;
        list.push($scope.fieldObject);
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    }

    //decide if component is visible
    $scope.isComponentVisible = function(component) {
       $scope.moduleObject = _.indexBy($scope.module.form, 'key');
       if (component.hasOwnProperty('conditional') && $scope.moduleObject[component.conditional.when].value == component.conditional.eq) {
          var isTrueSet = (component.conditional.show == 'true');
          return isTrueSet;
       }
       return true;
    }
    var query = { match: {'name': 'anwar'} };
    queryEngineSrv.getSearchResult('ambermeta', 'customer', query).then(function (data) {
       console.log('queryCount', data);
    });





    $scope.$watch('module', function(model) {
      $scope.showAsJson = angular.toJson(model, true);
    }, true);
  }

  angular.module('amberApp')
    .controller('formBuilderCtrl', formBuilderCtrl);
})(angular);

