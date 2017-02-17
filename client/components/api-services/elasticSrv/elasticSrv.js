'use strict';

(function (angular) {

angular.module('amberApp')
  .service('client', ['esFactory', 'CONFIG', function (esFactory, CONFIG) {
    return esFactory({
      host: CONFIG.elasticConfig.host,
    });
  }]);

})(angular);
