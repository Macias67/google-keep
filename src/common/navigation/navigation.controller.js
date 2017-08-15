'use strict';
'use strict';

class NavController {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    $onInit() {
        this.data = {
            title: 'Google Keep',
            user: {
                name: 'Francisco SuÃ¡rez',
                email: 'eric.suarez@deintec.com'
            },
            sidenav: {
                sections: [{
                    name: 'Principal',
                    actions: [{
                        icon: 'home',
                        name: 'Inicio',
                        link: 'home'
                    },
                        {
                            icon: 'person',
                            name: 'Login',
                            link: 'login'
                        }
                    ]
                }]
            }
        };
    }

    togglemenu(menu) {
        this.$mdSidenav(menu).toggle();
        if (menu === 'right') {
            this.notificationBar();
        }
    }

    notificationBar() {
        this.today = new Date();
        this.notifications = [
            {
                'title': 'ComprobaciÃ³n de gastos',
                'state': 'lists',
                'body': '#3421 [rechazada]'
            }
        ]
    }
}

NavController.$inject = ['$mdSidenav'];
export default NavController;