<template>
    <div class="row widget widget-dark equipment-component">
        <div class="col-md-12 widget-content">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-center text-lightning">Equipment</p>

                    <div v-for="type in types" class="equipment">
                        <small class="equipment-type">{{ type }}</small>
                        <small class="equipment-item item-normal">
                            <span v-if="equipment.slots[type] != undefined">
                                <span v-tippy="{ html: '#'+type, interactive: true, reactive: true, theme: 'normal', duration: [0,0], placement: 'left-start' }">
                                    {{ equipment.slots[type].name }}
                                </span>

                                <item-tooltip-component :equipment="true" :itemId="type" :item="equipment.slots[type]"></item-tooltip-component>
                            </span>
                            <span v-else>none</span>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemTooltipComponent from './ItemTooltipComponent';
import equipmentTypes from '../game/types/equipment.json';

export default {
    name: 'EquipmentComponent',
    components: {
        ItemTooltipComponent,
    },
    computed: {
        equipment() {
            return this.$store.state.game.getEquipment();
        },
        types() {
            return equipmentTypes;
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
