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
      getFieldStats: function (index_name, fields) {
        return client.fieldStats({
          index: index_name,
          fields: fields

        });
      },
      getResultCount: function(index_name, type, query) {
        return client.count({
          index: index_name,
          type: type,
          body: {
            query: query
          }
        });
      },
      getSearchResult: function(index_name, type, query) {
        return client.search({
          index: index_name,
          type: type,
          body: {
            query: query
          }
        });
      }
    }
  }

  angular.module("amberApp")
    .factory("queryEngineSrv", queryEngineSrv);
})(angular);

