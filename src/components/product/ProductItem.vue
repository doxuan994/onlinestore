<template>
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="product" v-for="productNameLength in productNameLengths">
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="product-link">
        <div class="product__image">
          <img class="img-responsive" :src="product.image" alt="">
        </div>
        <div class="product__description">
          <div class="product__info">
            <small>{{ product.manufacturer }}</small>
            <h4>{{ product.name }}</h4>
            <h5>Product Name Length No Space No Special Characters: {{ productNameLength }}</h5>
          </div>
          <div class="product__price-cart">
            ${{ product.price }}

            <div class="product__action">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>



<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  data() {
    return {
      productNameLengths: []
    }
  },
  components: {

  },
  created() {
    let noSpaceNoSpecial = this.product.name.replace(/[^a-zA-Z0-9]/g, '');
    this.productNameLengths.push(noSpaceNoSpecial.length);
  }
}
</script>

<style scoped>
.product {
  background: #FFF;
  padding: 15px;
  margin-bottom: 30px;
  transition: all 200ms ease-in;
  overflow: hidden;
}

.product:hover {
  transform: scale(1.1) translateY(-15px);
  box-shadow: 7px 9px 18px -2px rgba(61,61,61,1);
}

.product-link {
  display: block;
  color: #3D3D3D;
}

.product-link:hover {
  color: #3D3D3D;
  text-decoration: none;
}

.product .product__image {
  width: 100%;
}

.product__image img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 225px;
}

.product__description {
  width: 100%;
}

.product__description small {
  color: #808080;
}

.product__description h4 {
  margin: 3px 0 5px 0;
}

.product__price-cart {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}

.product__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}


button {
  background: #EFDB06;
  border: 1px solid #F9E610;
  border-radius: 20px;
  padding: 10px 15px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  transition: all 200ms ease-out;
  outline: none;
}
</style>
