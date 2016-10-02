var Vue = require('vue');
//var modulo= require('./modulo.js');
var VueResource = require('vue-resource');
var RandomWord = require('./random-word.vue')
//console.log(modulo(5));

Vue.use(VueResource);

var vm = new Vue({
    el: 'body',
    components: {
        'random-word': RandomWord
    }
});