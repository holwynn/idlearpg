<template>
    <div id="app">
        <div v-if="loaded" class="container-fluid">
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
        <div v-else>
            <div class="row">
                <div class="col-md-12">
                    <h5>Loading game...</h5>
                </div>
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
    beforeCreate() {
        this.loaded = false;
    },
    created() {
        this.loaded = true;
    },
    components: {
        HeaderComponent,
        MainComponent
    }
}
</script>

<style>

</style>
