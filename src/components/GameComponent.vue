<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content">
            <p style="float: left;">
                <strong class="item-magic">ahw</strong>
                <small> Magic Gladiator</small> 98
            </p>

            <p style="float: right;">
                <strong class="item-magic">Aether:</strong> 0
                <strong class="item-rare">Gold:</strong> {{ Math.floor(game.money) }}
            </p>

            <span class="clearfix"></span>
            <!-- Area -->
            <area-component></area-component>

            <div class="row">
                <div class="col-md-6">
                    <p class="text-center attack-click">
                        <img class="attack-click-image" @click="click" src="../assets/sword.png" alt="attack-click-image">
                    </p>
                </div>

                <div class="col-md-6">
                    <p class="text-center">Damage</p>

                    <ul class="text-center list-unstyled damage-stats">
                        <li class="list"><span class="text-fire">Fire: </span>33.4k</li>
                        <li class="list"><span class="text-cold">Cold: </span>194</li>
                        <li class="list"><span class="text-lightning">Lightning: </span>112</li>
                        <li class="list"><span class="text-light">Physical: </span>182k</li>
                    </ul>
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
    props: {
        msg: String
    },
    components: {
          AreaComponent,
          DropsComponent
    },
    data() {
        return {
            game: this.$store.state.game
        }
    },
    methods: {
        click() {
            this.game.clickAttack();
            // const element = document.querySelector('.attack-click-image').setAttribute();
        }
    }
}
</script>
