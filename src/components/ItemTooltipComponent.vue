<template>
    <div :id="itemId" class="item-tooltip">
        <div class="row">
            <div class="col-md-12 tooltip-header">
                <span class="ttip text-normal">{{ item.name }}</span>
                <span class="item-tooltip-stat" :class="{ 'text-fire': !canUse, 'text-success': canUse}">
                    {{ item.class | capitalize }} Level {{ item.itemlevel }}
                </span>

                <span v-if="item.tags">
                    {{ item.tags }}
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 item-stats">
                <span class="item-tooltip-stat">{{ weaponSpeed }}</span>
                <span v-for="attribute, key in item.attributes" class="item-tooltip-stat">
                    +{{ attribute }}{{attributeType(key)}} {{ attributeName(key) }}
                </span>
            </div>
        </div>

        <span class="item-tooltip-stat item-tooltip-gold">Sells for 283 <img height="16px" src="/assets/misc/gold.png" alt=""></span>
        <div v-if="inventory" class="tooltip-options">
            <div class="float-left">
                <span class="item-tooltip-options"><span class="text-muted">Equip</span></span>
                <span class="item-tooltip-options"><span class="text-rare">Stash</span></span>
            </div>

            <div class="float-right">
                <span class="item-tooltip-options"><span class="text-fire">Sell</span></span>
            </div>

            <div class="clearfix"></div>
        </div>

        <div v-if="equipment" class="tooltip-options">
            <div class="float-left">
                <span class="item-tooltip-options"><span class="text-lightning">Unequip</span></span>
            </div>

            <div class="float-right">
                <!-- <span class="item-tooltip-options"><span class="text-fire">Sell</span></span> -->
            </div>

            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import attributes from '../game/types/attributes.json';

export default {
    name: 'ItemTooltipComponent',
    props: {
        item: Object,
        itemId: String,
        inventory: Boolean,
        equipment: Boolean
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    computed: {
        canUse() {
            return this.item.itemlevel <= this.$store.state.game.level;
        },
        weaponSpeed() {
            if (this.item.attributes.attacks_per_second > 1) {
                return 'Very high speed';
            }

            if (this.item.attributes.attacks_per_second >= 0.65) {
                return 'High speed';
            }

            if (this.item.attributes.attacks_per_second >= 0.35) {
                return 'Medium speed';
            }

            if (this.item.attributes.attacks_per_second >= 0.15) {
                return 'Slow speed';
            }

            if (this.item.attributes.attacks_per_second >= 0.01) {
                return 'Very low speed';
            }

        }
    },
    methods: {
        attributeName(key) {
            return attributes[key].name;
        },
        attributeType(attribute) {
            return (attributes[attribute].type === 'increment') ? '%' : '';
        }
    }
}
</script>
