'use strict';
class HomeController {

    constructor($log, $mdDialog) {
        this.LOG = $log;
        this.$mdDialog = $mdDialog;
    }

    $onInit() {
        this.showInputs = false;

        this.notaNueva = {};
        this.editMode = false;

        this.notas = [
            {
                id: 1,
                title: 'Mi primer nota',
                text: 'Esto es mi texto'
            },
            {
                id: 2,
                title: 'Mi segunda nota',
                text: 'Esto otro texto muy completo'
            },
            {
                id: 3,
                title: 'Mi segunda nota',
                text: 'Esto otro texto muy completo'
            },
            {
                id: 4,
                title: 'Mi segunda nota',
                text: 'Esto otro texto muy completo de una nota genera en google keep prototype'
            }
        ];
    }

    changeViewInputs(action) {
        if (action === 'hide') {
            this.showInputs = false;
            return;
        }

        this.showInputs = true;
    }

    addNote() {
        this.showInputs = false;

        if (this.editMode) {
            for (let i = 0; i < this.notas.length; i++) {
                if (this.notas[i].id === this.notaNueva.id) {
                    this.notas[i] = this.notaNueva;
                    break;
                }
            }

            this.notaNueva = {};
            this.editMode = false;
            this.showInputs = false;
            return;
        }

        this.notas.push(this.notaNueva);
        this.notaNueva = {};
        this.LOG.info(this.notaNueva);
    }

    editNote(id) {
        for (let i = 0; i < this.notas.length; i++) {
            if (this.notas[i].id === id) {
                this.showInputs = true;
                this.editMode = true;
                this.notaNueva = {
                    id: this.notas[i].id,
                    title: this.notas[i].title,
                    text: this.notas[i].text
                };
                break;
            }
        }
    }

    deleteNote(id) {
        let confirm = this.$mdDialog.confirm()
            .textContent('¿Seguro de borrar esta nota?')
            .ok('Borrar')
            .cancel('Cancelar');


        this.$mdDialog.show(confirm).then(() => {
            for (let i = 0; i < this.notas.length; i++) {
                if (this.notas[i].id === id) {
                    this.notas.splice(i, 1);
                    break;
                }
            }
        });
    }
}

HomeController.$inject = ['$log', '$mdDialog'];

export default HomeController;