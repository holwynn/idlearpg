<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content equipment-container">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-center text-lightning">Equipment</p>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Main Hand</small>
                        <small class="item-legendary">Cleaver</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Off Hand</small>
                        <small class="item-legendary">Queen's Shield</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Helmet</small>
                        <small class="item-rare">Royal Crown</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Body Armour</small>
                        <small class="item-rare">Dragonite Chestplate</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Belt</small>
                        <small class="item-rare">Vanguard's Belt</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Gloves</small>
                        <small class="item-legendary">Hjol's Gloves</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Boots</small>
                        <small class="item-magic">Potato Sack</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Amulet</small>
                        <small class="item-magic">Rosemary</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Ring</small>
                        <small class="item-rare">Wedding Ring</small>
                    </div>

                    <div class="equipment-item">
                        <small class="equipment-item-type-header">Ring</small>
                        <small class="item-rare">Ruby Ring</small>
                    </div>
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
