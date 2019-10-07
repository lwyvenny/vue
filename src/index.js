import Vue from 'vue';
new Vue({
    el:'#app',
    data:{
        mag:'hello'
    },

    render:(h) =>{
        return h('div',null,'hello world');
    }
})