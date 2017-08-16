'use strict';
import template from './home.html';
import controller from './home.controller';
import './home.scss'

export const HomeComponent = {
    bindings: {
        data: '<'
    },
    controller,
    template
};