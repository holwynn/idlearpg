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
                    <img v-tippy="{ html: '#item-description-'+n, interactive: true, reactive: true, theme: 'honeybee' }" v-bind:id="'item-'+n" src="/assets/items/dagger.png" alt="">

                    <div :id="'item-description-'+n" class="item-tooltip">
                        <span class="item-tooltip-name text-rare">Swift Death Frost Dagger</span>
                        <span class="item-tooltip-stat text-success">Level 13</span>
                        <span class="item-tooltip-stat">Attack rate: slow</span>
                        <span class="item-tooltip-stat">+4 Physical Damage <span class="text-success">(+2)</span></span>
                        <span class="item-tooltip-stat">+12 <span class="text-cold">Cold Damage</span></span>
                        <span class="item-tooltip-stat">25% increased Cold Damage</span>
                        <span class="item-tooltip-stat">10% of Physical Damage converted to Cold Damage</span>

                        <span class="item-tooltip-stat item-tooltip-gold">Sells for: 283 gold</span>
                        <div class="tooltip-options">
                            <div class="float-left">
                                <span class="item-tooltip-options"><span class="text-muted">Equip</span></span>
                                <span class="item-tooltip-options"><span class="text-rare">Stash</span></span>
                            </div>

                            <div class="float-right">
                                <span class="item-tooltip-options"><span class="text-fire">Sell</span></span>
                            </div>

                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InventoryComponent',
    props: {

    },
    data() {
        return {
            inventory: []
        }
    },
    created() {

    },
    methods: {
        generateTippy(id) {

        }
    }
}
</script>
