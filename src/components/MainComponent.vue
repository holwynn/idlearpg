<template>
    <div class="main-component">
        <div class="row">
            <div class="col-sm-2 offset-sm-1 map-container">
                <map-component></map-component>
            </div>

            <div class="col-sm-6">
                <game-component></game-component>
            </div>

            <div class="col-sm-2 equipment-container">
                <equipment-component></equipment-component>
            </div>
        </div>

        <div class="row footer">
            <div class="col-md-12">
                <p><small>"The ARPG that gets you hard" - Erin Hannon</small></p>
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
import MapComponent from './MapComponent';

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
        TabSwitcherComponent,
        MapComponent
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
