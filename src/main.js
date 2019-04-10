import Vue from 'vue'
import App from './App.vue'
import store from './store'

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
