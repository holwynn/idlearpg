<template>
    <div class="row">
        <div class="col-md-12">
            <div class="float-left">
                <ul class="list-unstyled damage-stats">
                    <li v-if="this.stats['fire_damage'] > 0" class="list">
                        <span class="text-fire">Fire damage: </span>
                        {{ (this.game.getFireDamage()).toFixed(0) }}
                    </li>
                    <li v-if="this.stats['cold_damage'] > 0" class="list">
                        <span class="text-cold">Cold damage: </span>
                        {{ (this.game.getColdDamage()).toFixed(0) }}
                    </li>
                    <li v-if="this.stats['lighting_damage'] > 0" class="list">
                        <span class="text-lightning">Lightning damage: </span>
                        {{ (this.game.getLightingDamage()).toFixed(0) }}
                    </li>
                    <li v-if="this.stats['physical_damage'] > 0" class="list">
                        <span class="text-light">Physical damage: </span>
                        {{ (this.stats["physical_damage"].toFixed(0)) }}
                    </li>
                    <li class="list">
                        <span class="text-light">Click damage: </span>
                        {{ (this.game.calculateDamage()).toFixed(0) }}
                    </li>
                    <li class="list">
                        <span class="text-light">Attacks per second: </span>
                        {{ (this.stats["attacks_per_second"]).toFixed(1) }}
                    </li>
                    <li class="list">
                        <span class="text-light">DPS: </span>
                        {{ dps }}
                    </li>
                </ul>
            </div>

            <div class="float-right">
                <ul class="list-unstyled game-menu-button">
                    <li class="list"><small class="game-menu-button-active">Equipment</small></li>
                    <li class="list"><small>Inventory</small></li>
                    <li class="list"><small class="game-menu-button-active">Map</small></li>
                    <li class="list"><small class="game-menu-button-active">Stash</small></li>
                </ul>
            </div>

            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatsComponent',
    props: {

    },
    computed: {
        game() {
            return this.$store.state.game
        },
        stats() {
            return this.game.stats;
        },
        dps() {
            return (this.game.calculateDamage() * this.stats["attacks_per_second"]).toFixed(2)
        },
    }
}
</script>

