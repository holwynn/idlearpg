<template>
    <div class="row">
        <div v-if="drops.length > 0" class="col-md-12">
            <ul class="list-inline">
                <li class="list-inline-item">Drops:</li>
                <li class="list-inline-item drop"><span class="item-normal">Identify Scroll</span></li>
                <li class="list-inline-item drop"><span class="item-magic">Arcane Gloves</span></li>
                <li class="list-inline-item drop"><span class="item-rare">Druid Tunic</span></li>
                <li class="list-inline-item drop"><span class="item-rare">Druid Gloves</span></li>
                <li class="list-inline-item drop"><span class="item-unique">Fireant Axe</span></li>
                <li class="list-inline-item drop"><span class="item-legendary">Exalted Orb</span></li>

                <li class="list-inline-item drop-options"><small>loot all</small></li>
                <li class="list-inline-item drop-options"><small>clear all</small></li>
            </ul>
        </div>
        <div v-else class="col-md-12">
            <p>No drops</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropsComponent',
    props: {

    },
    data() {
        return {
            drops: [1]
        }
    },
    components: {

    },
    methods: {

    }
}
</script>

