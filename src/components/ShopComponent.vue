<template>
    <div class="">
        <div class="shop">
            <table class="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Type</th>
                        <th>Requirement</th>
                        <th>Price</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="item-magic">Eternal Dragon Gloves of the Lynx</td>
                        <td>Gloves</td>
                        <td>level 24</td>
                        <td>12,741 💰</td>
                        <td><span class="text-success">purchase</span></td>
                    </tr>
                    <tr>
                        <td class="item-magic">Serpent Robes</td>
                        <td>Body Armour</td>
                        <td>level 37</td>
                        <td>42,912 💰</td>
                        <td><span class="text-success">purchase</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShopComponent',
  props: {
    msg: String
  },
  components: {

  },
  methods: {

  }
}
</script>

