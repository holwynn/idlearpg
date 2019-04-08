<template>
    <div class="">
        <div v-if="stash.length > 0" class="stash">
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
                        <td class="item-rare">Aether Memory </td>
                        <td>Memory</td>
                        <td>level 68</td>
                        <td><span class="">use</span> - <span class="text-success">vendor</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <p>Your stash is empty</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StashComponent',
    props: {
        msg: String
    },
    data() {
        return {
            stash: []
        }
    },
    components: {

    },
    methods: {

    }
}
</script>
