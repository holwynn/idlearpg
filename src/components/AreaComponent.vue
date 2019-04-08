<template>
    <div class="row area-container">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-7 text-center current-area">
                    <span>{{ currentArea.act }}</span>
                    <!-- farm-button-active -->
                    <p>
                    <span @click="turnFarming()" v-bind:class="{ 'farm-button-active': farmActive }" v-if="currentArea.name != 'Gates of Hell'"class="farm-button">{{ farmText }} </span>
                        <strong>{{ currentArea.name }}</strong>
                        <small> ilvl {{ currentArea.level }}</small>
                    </p>
                    <p>{{ monstersDefeated }} / {{ currentArea.monstersAmount }}</p>
                </div>

                <div class="col-md-5">
                    <p v-bind:class="{ 'text-fire': currentMonster.rarity == 'unique' }">{{ currentMonster.name }}</p>
                    <span class="area-monster-health">HP: {{ Math.floor(currentMonster.hp) }}/{{ Math.floor(currentMonster.maxHp) }}</span>
                    <div class="progress enemy-progress">
                        <div
                        class="progress-bar"
                        role="progressbar"
                        v-bind:class="{ 'bg-danger': progress <= 35, 'bg-warning': progress <= 75, 'bg-success': progress <= 100}"
                        v-bind:style="{ width: progress + '%'}"
                        v-bind:aria-valuenow="88"
                        aria-valuemin="0"
                        aria-valuemax="100">
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
                farmText: 'farm'
        }
    },
    computed: {
        currentArea: function() {
            return this.$store.state.game.getCurrentArea();
        },
        currentMonster: function() {
            return this.$store.state.game.area.getCurrentMonster();
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
                this.farmText = 'farm';
            }
        }
    }
}
</script>
