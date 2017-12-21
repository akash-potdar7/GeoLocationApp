(function() {
  'use strict';

  angular
    .module('geoLocationApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
