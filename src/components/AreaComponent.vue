<template>
  <div class="area">
      <p>Area: <span class="item-rare">Aether Memory</span></p>
        <div class="row">
            <div class="col-md-8">
                <p>Fighting: Zombie</p>
            </div>
            <div class="col-md-4">
                <small>HP: 11,920/12,549</small>
                <div class="progress enemy-progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>  
        
        <drops-component></drops-component>
  </div>
</template>

<script>
import DropsComponent from './DropsComponent';

export default {
  name: 'AreaComponent',
  props: {
    msg: String
  },
  mounted() {
    let bar = document.querySelector('.progress-bar');
    console.log(bar.setAttribute('style', 'width: 100%;'));
  },
  components: {
      DropsComponent,
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
