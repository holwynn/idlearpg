<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content">
            <!-- Player -->
            <div class="row">
                <div class="col-md-12">
                    <p style="float: left;">
                        <strong class="item-magic">ahw</strong>
                        <small> Wretched Witch</small> {{ this.game.level }}
                    </p>

                    <p style="float: right;">
                        <!-- <strong class="item-legendary">Fragments:</strong> 0 -->
                        <strong class="item-rare">Gold:</strong> {{ Math.floor(game.money) }}
                    </p>

                    <span class="clearfix"></span>
                </div>
            </div>

            <!-- Area -->
            <div class="row">
                <div class="col-md-12">
                    <area-component></area-component>
                </div>
            </div>

            <!-- Stats -->
            <div class="row">
                <div class="col-md-6">
                    <small>Stats</small>
                    <stats-component></stats-component>
                </div>

                <div class="col-md-6">
                    <p class="attack-click text-center">
                        <img class="attack-click-image" @click="click" src="/assets/sword.png">
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <small>Inventory</small>
                    <inventory-component></inventory-component>
                </div>
                <div class="col-md-6">
                    <small>Drops</small>
                    <drops-component></drops-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AreaComponent from './AreaComponent';
import DropsComponent from './DropsComponent';
import InventoryComponent from './InventoryComponent';
import StatsComponent from './StatsComponent';

export default {
    name: 'GameComponent',
    components: {
          AreaComponent,
          DropsComponent,
          InventoryComponent,
          StatsComponent
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
