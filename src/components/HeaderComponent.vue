<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Aether Memories</h1>
        <p class="larger-font"><span class="game-saved">save game</span> - <a href="#">load game</a> - <a href="#">export save</a> - <a href="#">new game</a></p>
        <hr class="bg-info">
      </div>
      <hr class="bg-info">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
