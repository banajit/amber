'use strict';

(function (angular) {

  function homeCtrl(ModalService) {
    /**
     * Controller variables
     */
    var Home = this;

    /**
     *Show popup
     */
    Home.openPopUp = function (){
      ModalService.successPopup();
    }
  };

  angular.module('amberApp')
    .controller('HomeCtrl', homeCtrl)

})(angular)
