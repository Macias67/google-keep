'use strict';
class HomeController {
    constructor($log) {
        this.LOG = $log;
    }

    $onInit() {
    }
}

HomeController.$inject = ['$log'];

export default HomeController;