'use strict';
import {navigation} from './navigation';

const common = angular
    .module('app.common', [])
    .component('navigation', navigation)
    .name;

export default common;