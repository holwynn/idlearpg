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
                            <li class="list"><span class="text-fire">Fire: </span>33.4k</li>
                            <li class="list"><span class="text-cold">Cold: </span>194</li>
                            <li class="list"><span class="text-lightning">Lightning: </span>112</li>
                            <li class="list"><span class="text-light">Physical: </span>182k</li>
                        </ul>
                    </div>

                    <div class="float-right">
                        <ul class="list-unstyled game-menu-button">
                            <li class="list"><small class="game-menu-button-active">Equipment</small></li>
                            <li class="list"><small>Inventory</small></li> br
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
    data() {
        return {
            game: this.$store.state.game
        }
    },
    computed: {
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
