<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content map-component">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-center text-lightning">Map</p>

                    <div v-for="areas, act in acts" class="act">
                        <small class="map-act">{{ act }}</small>
                        <small
                            v-for="area in areas"
                            v-bind:class="{ 'map-current': currentArea == area }"
                            class="map-area">
                           {{ area }}
                       </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MapComponent',
    computed: {
        currentArea() {
            return this.$store.state.game.getCurrentArea().name;
        },
        acts() {
            return this.$store.state.game.getCampaign();
        },
        damagePerClick() {
            return this.$store.state.game.damage
        }
    },
    methods: {
    }
}
</script>
