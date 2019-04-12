<template>
    <div class="inventory row">
        <div v-for="n in 24" class="inventory-slot">
            <div v-if="inventory[n]">
                <div class="inventory-item" v-tippy="{ html: '#'+inventory[n].id, interactive: true, reactive: true, theme: 'normal', duration: [0,0] }">
                    <!-- <small>It</small> -->
                    <img :src="'/assets/items/'+inventory[n].image" alt="">
                </div>

                <item-tooltip-component :inventory="true" :itemId="inventory[n].id" :item="inventory[n]"></item-tooltip-component>
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
