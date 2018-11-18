import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Username: '',
        Name: '',
        currentIndex: ''
    },
    mutations: {
        setIndex: (state, data) => {
            state.currentIndex = data;
            console.log(state, data);
        },
        Username: (state, data) => {

        },
        Name: (state, data) => {

        },
    }
})