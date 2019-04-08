<template>
    <div class="row widget widget-dark">
        <div class="col-md-12 widget-content">
            <div class="tab-switcher">
                <span @click="setTab('inventory')" class="tab-switcher-element">Inventory</span>
                <span @click="setTab('stash')" class="tab-switcher-element">Stash</span>
                <span @click="setTab('shop')" class="tab-switcher-element">Shop</span>
            </div>
            <inventory-component v-if="currentTab == 'inventory'"></inventory-component>
            <shop-component v-if="currentTab == 'shop'"></shop-component>
            <stash-component v-if="currentTab == 'stash'"></stash-component>
        </div>
    </div>
</template>

<script>
import InventoryComponent from './InventoryComponent';
import ShopComponent from './ShopComponent';
import StashComponent from './StashComponent';

export default {
    name: 'TabSwitcherComponent',
    components: {
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
