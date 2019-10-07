import Vue from 'vue/dist/vue.esm';
import App from './App.vue';


new Vue({
    el:'#app',
    data:{
        mag:'hello'
    },

    // render :(h) =>{
    //     return h('div',null,'hello world');
    // }
    template: `
        <div>
            <h1>hello world</h1>
            <p>我的天。a</p>
            <App></App>
        </div>
    `,
    components:{
        App
    }
})