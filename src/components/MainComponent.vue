<template>
    <div class="container">
        <div class="row">
            <game-component></game-component>
            <equipment-component></equipment-component>
        </div>

        <div class="row">
            <p class="tab-switcher">
                <span @click="setTab('inventory')">Inventory</span> /
                <span @click="setTab('shop')">Shop</span> /
                <span @click="setTab('stash')">Stash</span>
            </p>

            <inventory-component v-if="currentTab == 'inventory'"></inventory-component>
            <shop-component v-if="currentTab == 'shop'"></shop-component>
            <stash-component v-if="currentTab == 'stash'"></stash-component>
        </div>
    </div>
</template>

<script>
import GameComponent from './GameComponent';
import EquipmentComponent from './EquipmentComponent';
import InventoryComponent from './InventoryComponent';
import ShopComponent from './ShopComponent';
import StashComponent from './StashComponent';

export default {
    name: 'MainComponent',
    props: {
        msg: String
    },
    components: {
        GameComponent,
        EquipmentComponent,
        InventoryComponent,
        ShopComponent,
        StashComponent
    },
    data() {
        return {
        currentTab: 'inventory'
        }
    },
    methods: {
        setTab(tabName) {
        this.currentTab = tabName;
        console.log(this.currentTab);
        }
    }
}
</script>
