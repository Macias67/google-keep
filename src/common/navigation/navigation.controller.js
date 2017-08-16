'use strict';
'use strict';

class NavController {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    $onInit() {

    }

    togglemenu(menu) {
        this.$mdSidenav(menu).toggle();
    }
}

NavController.$inject = ['$mdSidenav'];
export default NavController;