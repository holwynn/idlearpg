<template>
    <div class="row">
        <div class="col-md-12 text-center">
            <h3>Hjolwynn Heroes</h3>

            <p class="larger-font"><span class="game-saved">save game</span> - <a href="#">load game</a> - <a href="#">export save</a> - <a href="#">new game</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        msg: String
    },
    methods: {
        click() {
        this.$store.state.game.earn(1);
        }
    }
}
</script>
