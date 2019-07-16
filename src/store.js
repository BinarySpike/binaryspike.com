import Vue from 'vue'
import Vuex from 'vuex'
import db from './database'
import pickBy from 'lodash/pickBy';
import debounce from 'lodash/debounce';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: {},
        tags: {},
        loading: false,
    },
    getters: {
        getItems(state, getters) {
            return state.items;
        },
        ItemsWearingOrCarrying(state) {
            return pickBy(state.items, item => item.categories.includes('Wearing-Carrying'));
        },
        ItemsPacking(state) {
            return pickBy(state.items, item => item.categories.includes('Packing'));
        },
        ItemsBasecamp(state) {
            return pickBy(state.items, item => item.categories.includes('Basecamp'));
        },
        ItemsVehicle(state) {
            return pickBy(state.items, item => item.categories.includes('Vehicle'));
        }
    },
    mutations: {
        addItem(state, item) {
            let defaultItem = {
                categories: [],
                tags: [],
                color: 'white',
                status: 'pending', // 'completed', 'deleted'
                name: item.id,
            }
            
            //state.items[item.id] = { ...defaultItem, ...item.data() }
            Vue.set(state.items, item.id, { ...defaultItem, ...item.data() })
            
        },
        modifyItem(state, item) {
            //state.items[item.name] = item;
            Vue.set(state.items, item.name, item);
        },
        addTag(state, tag) {
            let defaultTag = {
                iconClass: "",
                name: tag.id,
            }
            //state.tags[tag.id] = { ...defaultTag, ...tag.data() };
            Vue.set(state.tags, tag.id, { ...defaultTag, ...tag.data() })
        },
        loading(state, flag) {
            state.loading = flag;
        },
    },
    actions: {
        async loadHuntingData({ commit }) {
            commit('loading', true)

            let itemsOperation = db.collection("items").onSnapshot(snapshot => {
                snapshot.forEach(item => {
                    commit('addItem', item);
                });
            });
            let tagsOperation = db.collection("tags").get().then(snapshot => {
                snapshot.forEach(tag => {
                    commit('addTag', tag);
                });
            });

            await Promise.all([itemsOperation, tagsOperation])

            commit('loading', false)
        },
        async modifyItem({ commit }, item) {
            commit('modifyItem', item);
            db.collection('items').doc(item.name).set(item);
        },
    }
})