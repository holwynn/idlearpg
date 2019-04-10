<template>
    <div class="row area-container">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-7 text-center current-area">
                    <span>{{ currentArea.act }}</span> <br>
                    <!-- farm-button-active -->
                    <strong class="area-name">{{ currentArea.name }}</strong>

                    <span @click="turnFarming()" v-bind:class="{ 'farm-button-active': farmActive }" v-if="currentArea.name != 'Gates of Hell'" class="farm-button"> {{ farmText }} </span>
                    <p>{{ monstersDefeated }} / {{ currentArea.monstersAmount }}</p>
                </div>

                <div class="col-md-5">
                    <div class="monster-container">
                        <!-- <p v-bind:class="{ 'text-fire': currentMonster.rarity == 'unique' }">{{ currentMonster.name }}</p> -->
                        <small class="monster-hp">HP: {{ currentMonster.hp.toFixed(0) }}/{{ currentMonster.maxHp.toFixed(0) }}</small>

                        <div class="progress enemy-progress">
                            <div
                                class="progress-bar bg-danger"
                                role="progressbar"
                                v-bind:style="{ width: progress + '%'}"
                                v-bind:aria-valuenow="88"
                                aria-valuemin="0"
                                aria-valuemax="100">
                            </div>
                        </div>

                        <div class="monster-name">
                            <span class="monster-name">{{ currentMonster.name }}</span> <br>
                            <small class="monster-type">Beast level {{ currentMonster.level }}</small>
                        </div>
                        <div class="monster-image">
                            <img class="attack-click-image" :src="monsterImage" alt="attack-click-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DropsComponent from './DropsComponent';

    export default {
        name: 'AreaComponent',
        props: {
            msg: String
        },
        data() {
            return {
                farmActive: false,
                farmText: 'farm this area'
        }
    },
    computed: {
        currentArea: function() {
            return this.$store.state.game.getCurrentArea();
        },
        currentMonster: function() {
            return this.$store.state.game.area.getCurrentMonster();
        },
        monsterImage() {
            return '/assets/monsters/' + this.currentMonster.image;
        },
        monstersDefeated: function() {
            if (this.currentArea.getMonsters().length === this.currentArea.monstersAmount) {
                return 1;
            } else {
                return this.currentArea.monstersAmount - this.currentArea.getMonsters().length + 1;
            }
        },
        progress: function() {
            const progressHp = this.currentMonster.hp * 100 / this.currentMonster.maxHp;
            return Math.round(progressHp);
        },
        progressBackground: function() {
            if (this.progress >= 75) {
                return 'bg-success';
            }

            if (this.progress >= 35) {
                return 'bg-warning';
            }

            return 'bg-danger';
        }
    },
    components: {
        DropsComponent,
    },
    methods: {
        turnFarming() {
            if (!this.farmActive) {
                this.$store.state.game.enableFarming();
                this.farmActive = true;
                this.farmText = 'farming';
            } else {
                this.$store.state.game.disableFarming();
                this.farmActive = false;
                this.farmText = 'farm this area';
            }
        }
    }
}
</script>
