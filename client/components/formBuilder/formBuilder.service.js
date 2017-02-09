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
         return {key: '', value: ''};
      },
      validateJson: function(text) {
        if (!angular.isUndefined(text) && /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
          return true;
        }else{
          return false;
        }
      }
    }
  }

  angular.module("amberApp")
    .factory("formBuilderService", formBuilderService);
})(angular);

