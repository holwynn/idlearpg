<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content equipment-container">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-center text-lightning">Equipment</p>

                    <div class="equipment">
                        <small class="equipment-type">Main hand</small>
                        <small class="equipment-item item-normal">
                            <span v-if="equipment.mainhand != undefined">
                                {{ equipment.mainhand.name }}
                            </span>
                            <span v-else>none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Off Hand</small>
                        <small class="equipment-item item-normal">
                            <span v-if="equipment.offhand != undefined">
                                {{ equipment.offhand.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Helmet</small>
                        <small class="equipment-item">
                            <span v-if="equipment.helmet != undefined">
                                {{ equipment.helmet.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Body Armour</small>
                        <small class="equipment-item">
                            <span v-if="equipment.bodyarmour != undefined">
                                {{ equipment.bodyarmour.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Belt</small>
                        <small class="equipment-item">
                            <span v-if="equipment.belt != undefined">
                                {{ equipment.belt.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Gloves</small>
                        <small class="equipment-item">
                            <span v-if="equipment.gloves != undefined">
                                {{ equipment.gloves.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Boots</small>
                        <small class="equipment-item">
                            <span v-if="equipment.boots != undefined">
                                {{ equipment.helmet.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Amulet</small>
                        <small class="equipment-item">
                            <span v-if="equipment.amulet != undefined">
                                {{ equipment.amulet.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Left Ring</small>
                        <small class="equipment-item">
                            <span v-if="equipment.leftring != undefined">
                                {{ equipment.leftring.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
                    </div>

                    <div class="equipment">
                        <small class="equipment-type">Right Ring</small>
                        <small class="equipment-item">
                            <span v-if="equipment.rightring != undefined">
                                {{ equipment.rightring.name }}
                            </span>
                            <span v-else class="item-normal">none</span>
                        </small>
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
            return this.$store.state.game.getEquipment();
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
