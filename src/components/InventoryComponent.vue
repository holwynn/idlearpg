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
            <p>Your inventory is empty! Better go kill some monsters.</p>
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
    methods: {

    }
}
</script>
