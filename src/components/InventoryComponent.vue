<template>
    <div class="inventory">
        <div v-for="item in inventory" class="inventory-slot">
            <div class="inventory-item">
                <!-- <img v-tippy="{ html: '#item-description-'+n, interactive: true, reactive: true, theme: 'honeybee', duration: [0,0] }" v-bind:id="'item-'+n" src="/assets/items/dagger.png" alt="">

                <item-tooltip-component v-bind:itemId="'item-description-'+n"></item-tooltip-component> -->

                <span v-tippy="{ html: '#'+item.id, interactive: true, reactive: true, theme: 'normal', duration: [0,0] }">
                    <img :src="'/assets/items/'+item.image" alt="">
                </span>

                <item-tooltip-component :inventory="true" :itemId="item.id" :item="item"></item-tooltip-component>
            </div>
        </div>
    </div>
</template>

<script>
import ItemTooltipComponent from './ItemTooltipComponent';

export default {
    name: 'InventoryComponent',
    props: {

    },
    components: {
        ItemTooltipComponent,
    },
    computed: {
        inventory() {
            return this.$store.state.game.getInventory();
        }
    }
}
</script>
