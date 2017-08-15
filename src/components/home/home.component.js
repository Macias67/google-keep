'use strict';
import template from './home.html';
import controller from './home.controller';

export const HomeComponent = {
    bindings: {
        data: '<'
    },
    controller,
    template
};