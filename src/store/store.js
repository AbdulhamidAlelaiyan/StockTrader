import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks.js';
import portfolio from './modules/portfolio.js';

import { loadData } from './actions.js';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio,
    },
    actions: {
        loadData,
    },
});