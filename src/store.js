import Vue from 'vue'
import Vuex from 'vuex'
import Game from './game/Game';
import Item from './game/Item';
import Equipment from './game/Equipment';

import { create_item_from_base } from './game/itemutils';

// create_item_from_base('daggers', 'frost_dagger')
const startingEquipment = new Equipment({
    mainhand: create_item_from_base('axes', 'stone_axe'),
    offhand: undefined,
    helmet: create_item_from_base('helmets', 'jew_hat'),
    bodyarmour: undefined,
    gloves: undefined,
    boots: undefined,
    leftring: undefined,
    rightring: undefined,
    amulet: undefined
});

let game = new Game({
    money: 0,
    equipment: startingEquipment
});

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
