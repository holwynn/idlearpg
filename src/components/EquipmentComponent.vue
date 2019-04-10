<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content equipment-container">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-center text-lightning">Equipment</p>

                    <div class="equipment">
                        <small class="equipment-type">Main Hand</small>
                        <small class="item-normal">{{ equipment.mainhand.name }}</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Off Hand</small>
                        <small v-if="equipment.offhand != undefined">
                            {{ equipment.offhand.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Helmet</small>
                        <small v-if="equipment.helmet != undefined">
                            {{ equipment.helmet.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Body Armour</small>
                        <small v-if="equipment.bodyarmour != undefined">
                            {{ equipment.bodyarmour.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Belt</small>
                        <small v-if="equipment.belt != undefined">
                            {{ equipment.belt.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Gloves</small>
                        <small v-if="equipment.gloves != undefined">
                            {{ equipment.gloves.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Boots</small>
                        <small v-if="equipment.boots != undefined">
                            {{ equipment.boots.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Amulet</small>
                        <small v-if="equipment.amulet != undefined">
                            {{ equipment.amulet.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Left Ring</small>
                        <small v-if="equipment.leftring != undefined">
                            {{ equipment.leftring.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Right Ring</small>
                        <small v-if="equipment.rightring != undefined">
                            {{ equipment.rightring.name }}
                        </small>
                        <small v-else class="item-normal">none</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EquipmentComponent',
    computed: {
        equipment() {
            return this.$store.state.game.equipment;
        },
        damagePerClick() {
            return this.$store.state.game.damage;
        }
    },
    methods: {
        rarity(rarity) {
            return 'item-' + rarity;
        }
    }
}
</script>
