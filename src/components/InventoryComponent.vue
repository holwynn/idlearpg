<template>
    <div class="">
        <div v-if="inventory.length > 0" class="inventory">
            <table class="table table-sm table-striped shadow">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Type</th>
                        <th>Requirement</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Identify Scroll (x 203)</td>
                        <td>Scroll</td>
                        <td>none</td>
                        <td><span class="item-legendary">stash</span> - <span class="text-success">vendor</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <div v-for="n in 68" class="inventory-slot">
                <div class="inventory-item">
                    <!-- <img v-tippy="{ html: '#item-description-'+n, interactive: true, reactive: true, theme: 'honeybee', duration: [0,0] }" v-bind:id="'item-'+n" src="/assets/items/dagger.png" alt="">

                    <item-tooltip-component v-bind:itemId="'item-description-'+n"></item-tooltip-component> -->
                </div>
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
    data() {
        return {
            inventory: []
        }
    }
}
</script>
