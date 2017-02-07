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
      }
    }
  }

  angular.module("amberApp")
    .factory("formBuilderService", formBuilderService);
})(angular);

