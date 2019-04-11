/*
 * Hjolwynn Heroes
 * Copyright (C) 2019 Ariel Holowinski <ahw@tuta.io>

 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 */
import Vue from 'vue';
import VueTippy from 'vue-tippy'
import Vuex from 'vuex'
import App from './App.vue';
import Game from './game/Game';
import Equipment from './game/Equipment';
import { create_item_from_base } from './game/itemutils';

Vue.use(Vuex)
Vue.use(VueTippy);
Vue.config.productionTip = false

const startingEquipment = new Equipment({
    mainhand: create_item_from_base('axes', 'cleaver'),
    offhand: create_item_from_base('axes', 'cleaver'),
});

let game = new Game({ money: 0, equipment: startingEquipment });

const store = new Vuex.Store({ state: { game: game } });

new Vue({
    store,
    render: h => h(App),
    created: function() {
        setInterval(() => {
            this.$store.state.game.dpsAttack();
        }, 1000);
    }
}).$mount('#app')
