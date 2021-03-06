import Vue from 'vue';
import VueTippy from 'vue-tippy'
import Vuex from 'vuex'
import App from './App.vue';
import Game from './game/Game';
import Equipment from './game/Equipment';
import { create_item_from_base } from './game/itemutils';
// import database from './database';

Vue.use(Vuex)
Vue.use(VueTippy);
Vue.config.productionTip = false

const startingEquipment = new Equipment({
    mainhand: create_item_from_base('axes', 'cleaver')
});

const inventory = [
    create_item_from_base('daggers', 'rusty_dagger'),
    create_item_from_base('daggers', 'frost_dagger'),
    create_item_from_base('axes', 'cleaver', 5),
    create_item_from_base('helmets', 'elven_helm', 10),
    create_item_from_base('bodyarmours', 'elven_ringmail', 10),
    create_item_from_base('boots', 'elven_boots', 1),
]

let game = new Game({
    money: 0,
    equipment: startingEquipment,
    inventory: inventory
});

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
