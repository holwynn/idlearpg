<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content">
            <p style="float: left;">
                <strong class="item-magic">ahw</strong>
                <small> Wretched Witch</small> 98
            </p>

            <p style="float: right;">
                <!-- <strong class="item-legendary">Fragments:</strong> 0 -->
                <strong class="item-rare">Gold:</strong> {{ Math.floor(game.money) }}
            </p>

            <span class="clearfix"></span>
            <!-- Area -->
            <area-component></area-component>

            <div class="row">
                <div class="col-md-7">
                    <div class="float-left">
                        <small>Stats</small>
                        <ul class="list-unstyled damage-stats">
                            <li v-if="this.stats['fire_damage'] > 0" class="list">
                                <span class="text-fire">Fire damage: </span>
                                {{ this.game.getFireDamage() }}
                            </li>
                            <li v-if="this.stats['cold_damage'] > 0" class="list">
                                <span class="text-cold">Cold damage: </span>
                                {{ this.game.getColdDamage() }}
                            </li>
                            <li v-if="this.stats['lighting_damage'] > 0" class="list">
                                <span class="text-lightning">Lightning damage: </span>
                                {{ this.game.getLightingDamage() }}
                            </li>
                            <li v-if="this.stats['physical_damage'] > 0" class="list">
                                <span class="text-light">Physical damage: </span>
                                {{ this.stats["physical_damage"] }}
                            </li>
                            <li class="list">
                                <span class="text-light">Click damage: </span>
                                {{ this.game.calculateDamage() }}
                            </li>
                            <li class="list">
                                <span class="text-light">Attacks per second: </span>
                                {{ this.stats["attacks_per_second"] }}
                            </li>
                            <li class="list">
                                <span class="text-light">DPS: </span>
                                {{ this.stats["physical_damage"] * this.stats["attacks_per_second"] }}
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

                <div class="col-md-5">
                    <p class="attack-click text-center">
                        <img class="attack-click-image" @click="click" src="/assets/sword.png">
                    </p>
                </div>
            </div>

            <!-- Drrops -->
            <drops-component></drops-component>
        </div>
    </div>
</template>

<script>
import AreaComponent from './AreaComponent';
import DropsComponent from './DropsComponent';

export default {
    name: 'GameComponent',
    components: {
          AreaComponent,
          DropsComponent
    },
    computed: {
        game() {
            return this.$store.state.game
        },
        stats() {
            return this.game.stats;
        },
        monsterImage() {
            return '/assets/monsters/' + this.game.area.getCurrentMonster().image;
        }
    },
    methods: {
        click() {
            this.game.clickAttack();
        }
    }
}
</script>
