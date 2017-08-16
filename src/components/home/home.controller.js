'use strict';
class HomeController {

    constructor($log) {
        this.LOG = $log;
        this.showInputs = false
    }

    $onInit() {
        this.LOG.info('Hola desde Home Controller');
    }

    changeViewInputs(action) {
        if (action === 'hide') {
            this.showInputs = false;
            this.LOG.info('hide');
            return;
        }

        this.showInputs = true;
        this.LOG.info(this.showInputs);
    }
}

HomeController.$inject = ['$log'];

export default HomeController;