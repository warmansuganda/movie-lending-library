/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

require('chart.js');
require('daterangepicker');
require('datatables.net');
require('jquery-form');
require('waitMe/waitMe.min');
require('select2');
require('jquery-numeric');
require('multiselect/js/jquery.multi-select');
require('bootstrap4-toggle/js/bootstrap4-toggle.min');

const Swal = window.Swal = require('sweetalert2/dist/sweetalert2.min');
const toastr = window.toastr = require('toastr');

window.AutoNumeric = require('AutoNumeric');
window.moment = require('moment');
window.ProgressBar = require('progressbar.js')
window.Handlebars = require('handlebars/dist/handlebars.min');

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({ /* custom magic here */})

/* Helpers */
require('./helpers/ajax');
require('./helpers/datatable');
require('./helpers/common');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
