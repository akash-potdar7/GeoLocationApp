(function() {
  'use strict';

  angular
    .module('geoLocationApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $mdToast, $rootScope,$state) {
    var vm = this;
    vm.user={};

      vm.login=function()
        {
        if (!vm.user.email || !vm.user.password) {
            $mdToast.show(
                $mdToast.simple()
                    .content("Fields cant be empty")
                    .position("top right")
                    .theme("error-toast")
                    .hideDelay(3000)
            );
        }

       

    }


 

   
  }
})();
