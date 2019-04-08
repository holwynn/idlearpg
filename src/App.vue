<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-md-12">
                <header-component></header-component>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <main-component></main-component>
            </div>
        </div>
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
