'use strict';
(function (angular) {
  /**
   * formBuilderService service
   * @param $http
   * @returns {{formBuilderService: Function}}
   * @constructor
   */
  function formBuilderService($http) {
    return {
      getFieldConfig: function () {
        return $http.get('formFields.json');
      },
      getSelectDataSources: function() {
        return [
            {key: 'values', value: "Values"},
            {key: 'rawJson', value: "Raw JSON"},
            {key: 'apiUrl', value: "API URL"},
        ];
      },
      getSelectList: function() {
         return {key: 'keys', value: "Values"};
      }
    }
  }

  angular.module("amberApp")
    .factory("formBuilderService", formBuilderService);
})(angular);

