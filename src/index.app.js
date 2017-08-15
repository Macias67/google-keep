'use strict';
/* libraries */
import angular from 'angular';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import ngRoute from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import ngMdIcons from 'angular-material-icons';
/* common */
import common from './common';
import {appComponent} from './common/main.components';
/* components */
import components from './components/components';
/* config */
import config from './index.config';
/* run */
import run from './index.run';
/* styles */
import 'angular-material/angular-material.min.css';
import 'angular-material-icons/angular-material-icons.css'
import './index.scss'

/* AngularJS */
const app = angular
    .module('GKeepApp', [
        ngAria,
        ngAnimate,
        ngMaterial,
        ngMdIcons,
        ngRoute,
        ngSanitize,
        common,
        components
    ])
    .component('gkeep', appComponent)
    .config(config)
    .run(run)
    .name;

/* bootstraping */
document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['GKeepApp']));

export default app;