<template>
    <div id="app">
        <header-component></header-component>
        <main-component></main-component>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'

export default {
    name: 'app',
    data() {
        return {
        name: this.$store.state.name
        }
    },
    components: {
        HeaderComponent,
        MainComponent
    }
}
</script>

<style>
#app {

}
</style>
