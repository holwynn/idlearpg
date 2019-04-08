<template>
    <div class="col-md-6">
        <p>
            <strong class="text-info">nicegame</strong> level 81 |
            exalted orbs: 12 |
            chaos orbs: {{ this.$store.state.game.money }}
        </p>

        <p class="text-center chaos-click">
            <img class="chaos-click-image" @click="click" src="chaos.png" alt="chaos-click">
        </p>

        <!-- Area -->
        <area-component></area-component>
    </div>
</template>

<script>
import AreaComponent from './AreaComponent';

export default {
    name: 'GameComponent',
    props: {
        msg: String
    },
    components: {
          AreaComponent,
    },
    methods: {
        click() {
        this.$store.state.game.earn(1);
        }
    }
}
</script>
