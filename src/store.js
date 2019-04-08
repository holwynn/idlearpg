import Vue from 'vue'
import Vuex from 'vuex'
import Game from './game/Game';

let game = new Game();

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        game: game
    },
    mutations: {

    },
    actions: {

    }
})
