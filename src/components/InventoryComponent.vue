<template>
    <div class="container">
        <div class="inventory">
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
                    <tr>
                        <td class="item-magic">Solar Cemetery Map</td>
                        <td>Map</td>
                        <td>level 68</td>
                        <td><span class="item-legendary">stash</span> - <span class="text-success">vendor</span></td>
                    </tr>
                    <tr>
                        <td><span class="item-rare">Magistrate Crown</span></td>
                        <td>Helmet</td>
                        <td>level 45</td>
                        <td><span class="text-danger">identify</span> - <span class="item-legendary">stash</span> - <span class="text-success">vendor</span></td>
                    </tr>
                    <tr>
                        <td><span class="item-rare">Dire Straits Vaal Regalia</span></td>
                        <td>Body Armour</td>
                        <td>level 68</td>
                        <td><span class="item-legendary">stash</span> - <span class="text-success">vendor</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InventoryComponent',
    props: {
        msg: String
    },
    components: {

    },
    methods: {

    }
}
</script>
