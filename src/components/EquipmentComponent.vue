<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">Equipment</p>

                    <div class="row">
                        <div class="col-md-6">
                            <p class="text-center">Main hand</p>
                            <p class="text-center"><span class="item">Rusty Dagger</span></p>
                        </div>
                        <div class="col-md-6">
                            <p class="text-center">Offhand</p>
                            <p class="text-center"><span class="item">None</span></p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <p>Helmet</p>
                        </div>
                        <div class="col-md-6">
                            <span class="item">None</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <p>Body Armour</p>
                        </div>
                        <div class="col-md-6">
                            <span class="item">None</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <p>Belt</p>
                        </div>
                        <div class="col-md-6">
                            <span class="item">None</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <p>Gloves</p>
                        </div>
                        <div class="col-md-6">
                            <span class="item">None</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <p>Boots</p>
                        </div>
                        <div class="col-md-6">
                            <span class="item">None</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Left ring</p>
                        </div>
                        <div class="col-md-6">
                            <span class="item">None</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <p>Right ring</p>
                        </div>
                        <div class="col-md-6">
                            <span class="item">None</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <p>Amulet</p>
                        </div>
                        <div class="col-md-6">
                            <span class="item">None</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">Stats</p>
                    <p>Damage per click: {{ damagePerClick }}</p>
                    <p>Damage per second: 0</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EquipmentComponent',
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
