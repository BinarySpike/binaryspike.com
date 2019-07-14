import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        items: 0,
    },
    mutations: {
        increment (state) {
            state.count++;
        }
    }
})