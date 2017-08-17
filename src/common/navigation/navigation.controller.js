'use strict';
'use strict';

class NavController {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    $onInit() {
        this.query = "";
    }

    togglemenu(menu) {
        this.$mdSidenav(menu).toggle();
    }

    search() {
        console.log(this.notas)
    }
}

NavController.$inject = ['$mdSidenav'];
export default NavController;