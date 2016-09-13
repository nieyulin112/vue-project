import Vue from 'vue';
import Vuex from 'vuex';
import middlewares from './middlewares.js';
import route from './modules/route.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
    },
    mutations: {
        ...route
    },
    middlewares: middlewares
});
export default store;
