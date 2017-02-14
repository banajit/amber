'use strict';
(function (angular) {
  /**
   * queryEngineSrv service
   * @param client instance of esFactory()
   * @returns {{formBuilderService: Function}}
   * @constructor
   */
  function queryEngineSrv(client) {
    return {
      getVariableList: function () {
       /* client.search({
          index: 'ambermeta',
          //type: 'customer',
          body: {
            query: {
              match: { name: 'anwar' }
            }
          }
        }, function (error, response) {
          console.log('response', response);
        });*/
        return client.fieldStats({
          index: 'ambermeta',
          fields: 'name'

        });
        //return $http.get('formFields.json');
      }
    }
  }

  angular.module("amberApp")
    .factory("queryEngineSrv", queryEngineSrv);
})(angular);

