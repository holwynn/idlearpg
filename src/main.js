import Vue from 'vue';
import VueTippy from 'vue-tippy'
import App from './App.vue';
import store from './store';

Vue.use(VueTippy);
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
    created: function() {
        setInterval(() => {
            this.$store.state.game.dpsAttack();
        }, 1000);
    }
}).$mount('#app')
