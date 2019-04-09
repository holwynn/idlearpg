<template>
    <div class="">
        <div class="row">
            <div class="col-lg-2">
                <equipment-component></equipment-component>
            </div>
            <div class="col-lg-8">
                <game-component></game-component>
            </div>

            <div class="col-lg-2">
                <equipment-component></equipment-component>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <tab-switcher-component></tab-switcher-component>
            </div>
        </div>

        <!-- <div class="row">
            <div class="col-md-12">
                <tab-switcher-component></tab-switcher-component>
            </div>
        </div> -->
    </div>
</template>

<script>
import GameComponent from './GameComponent';
import EquipmentComponent from './EquipmentComponent';
import InventoryComponent from './InventoryComponent';
import ShopComponent from './ShopComponent';
import StashComponent from './StashComponent';
import DropsComponent from './DropsComponent';
import TabSwitcherComponent from './TabSwitcherComponent';

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
        StashComponent,
        DropsComponent,
        TabSwitcherComponent
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
