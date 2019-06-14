<template>
  <div>
    <h1>In Stock</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '../product/ProductList.vue'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    ProductList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
