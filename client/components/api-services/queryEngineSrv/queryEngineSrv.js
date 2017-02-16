'use strict';
(function (angular) {
  /**
   * queryEngineSrv service
   * @param client instance of esFactory()
   * @returns {{formBuilderService: Function}}
   * @constructor
   */
  function queryEngineSrv(client, CONFIG, $q) {
    return {
      getFieldStats: function (fields) {
        return client.fieldStats({
          index: CONFIG.elasticConfig.indexName,
          fields: fields
        });
      },
      getResultCount: function(type, query) {
        return client.count({
          index: CONFIG.elasticConfig.indexName,
          type: type,
          body: {
            query: query
          }
        });
      },
      getSearchResult: function(type, query) {
        return client.search({
          index: CONFIG.elasticConfig.indexName,
          type: type,
          body: {
            query: query
          }
        });
      },
      getSchemaMap: function(type) {
        return client.indices.getMapping({
          index: CONFIG.elasticConfig.indexName,
          type: type,
        });
      },
      getVariableList: function(type) {
        var deferred = $q.defer();
        this.getSchemaMap().then(function (data) {
          var allTypes = {};
          angular.forEach(data[CONFIG.elasticConfig.indexName]['mappings'], function(value, key) {
            allTypes = _.extend(allTypes, value['properties']);
          });
          deferred.resolve(allTypes);
        },
        function(data) {
            deferred.resolve(data);
        });
        return deferred.promise;
      }
    }
  }

  angular.module("amberApp")
    .factory("queryEngineSrv", queryEngineSrv);
})(angular);

