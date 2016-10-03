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
    },
    methods:{
        mostrar: function(){
            console.log('Hello world!');
        }
    }

});

document.addEventListener('init', function(event) {
    // event.target is the <ons-page> element
    if (event.target.matches('#page1')) {
        ons.notification.alert('Page 1 is initiated.');
    }
});