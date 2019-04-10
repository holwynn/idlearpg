<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content map-component">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-center text-lightning">Maps</p>
                    <div class="act">
                        <small class="map-act">Act 1</small>
                        <small class="map-area">The Sewers</small>
                        <small class="map-area">The Cemetery</small>
                        <small class="map-area">Royal Burials</small>
                        <small class="map-area">Tomb of Mayor West</small>
                        <small class="map-area">Inner Tomb</small>
                        <small class="map-area">The Hidden Passage</small>
                    </div>
                    <div class="act">
                        <small class="map-act">Act 2</small>
                        <!-- Elwynn west, the posh part of town -->
                        <!--
                            The people from Elwynn believed that dead relatives
                            would give them great favor from the grave so
                            naturally the richest families owned houses next
                            to cemeteries.
                         -->
                        <small class="map-area">Elwynn West</small>
                        <small class="map-area">Southern Forests</small>
                        <small class="map-area">Southern Forests</small>
                    </div>
                    <div class="act">
                        <small class="map-act">Act 3</small>
                        <small class="map-area map-current">Vorgrymm Citadel</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MapComponent',
    props: {
        msg: String
    },
    computed: {
        damagePerClick() {
            return this.$store.state.game.damage
        }
    },
    methods: {
    }
}
</script>
