<template>
    <div class="col-md-6 shadow">
        <div class="row">
            <div class="col-md-12">
                
                <!-- figure out why the fuck i need to br here -->
                <br> <br>
                
                
                <p class="text-center">Equipment</p>
                
                <div class="">
                    <div class="row weapons-container">
                        <div class="col-md-6">
                            <p class="text-center">Main hand</p>
                            <a href="#"><p class="text-center"><span class="item-unique">Brightbeak</span></p></a>
                        </div>
                        <div class="col-md-6">
                            <p class="text-center">Offhand</p>
                            <a href="#"><p class="text-center"><span class="item-rare">Bastion Barrier Vaal Buckler</span></p></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Helmet</p>
                        </div>
                        <div class="col-md-6">
                            <a class="item-magic" href="#">Eternal Burgonet of Zenith</a>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <p>Body Armour</p>
                        </div>
                        <div class="col-md-6">
                            <a class="item-unique" href="#">Kaom's Heart</a>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <p>Belt</p>
                        </div>
                        <div class="col-md-6">
                            <a class="item-magic" href="#">Virile Leather Belt of the Snake</a>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <p>Gloves</p>
                        </div>
                        <div class="col-md-6">
                            <a href="#">Wool Gloves</a>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <p>Boots</p>
                        </div>
                        <div class="col-md-6">
                            <a class="item-unique" href="#">Kaom's Way</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Left ring</p>
                        </div>
                        <div class="col-md-6">
                            <a class="item-rare" href="#">Death Sign Ruby Ring</a>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <p>Right ring</p>
                        </div>
                        <div class="col-md-6">
                            <a class="item-rare" href="#">Spiral Loop Amethyst Ring</a>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <p>Amulet</p>
                        </div>
                        <div class="col-md-6">
                            <a class="item-unique" href="#">Atziri's Foible</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EquipmentComponent',
  props: {
    msg: String
  },
  components: {
      
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
