<template>
  <div class="product-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details__image">
          <img class="img-responsive" :src="product.image" @click="isActive = !isActive" :class="{ zoom: isActive }">
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
          <div class="product-details__description">
            <small>{{ product.manufacturer }}</small>
            <h3>{{ product.name }}</h3>
            <p>
              {{ product.description }}
            </p>
          </div>
          <div class="product-details__price-cart">
            <p v-show="product.price">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- this.$route.params.id -->

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      isActive: false,
      product: {
        id: 0,
        manId: 0,
        name: '',
        price: 0,
        image: '',
        description: '',
        manufacturer: '',
      },
      products: [
        {
          id: 1,
          manId: 3,
          name: 'Samsung S7 Edge',
          price: 659,
          image: 'http://www.brandsmartusa.com/images/product/large/20208018.jpg',
          description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
          manufacturer: 'Samsung'
        },
        {
          id: 2,
          manId: 1,
          name: 'iPhone 7',
          price: 769,
          image: 'http://www.brandsmartusa.com/images/product/large/20217366.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
          manufacturer: 'Apple'
        },
        {
          id: 3,
          name: 'Xperia XZ',
          price: 649,
          image: 'http://www.brandsmartusa.com/images/product/large/20222515.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
          manufacturer: 'Sony'
        }
      ],

    }
  },
  created() {
    let productId = this.$route.params.id;

    for (let i = 0; i < this.products.length; i++) {
      if (productId == this.products[i].id) {
        this.product.name = this.products[i].name;
        this.product.price = this.products[i].price;
        this.product.image = this.products[i].image;
        this.product.description = this.products[i].description;
        this.product.manufacturer = this.products[i].manufacturer;
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>

.zoom {
  transform: scale(1.5) translateY(15px);
}


.product-details {
  border-bottom: 2px solid #F5F5F5;
  padding: 30px 0;
}
.product-details__image {

}
.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: all 0.5s ease-in;
}

.img-responsive:hover {

}

.product-details__description {
  padding-top: 30px;
}
.product-details__description small {
  color: #808080;
}
.product-details__description h3 {
  margin: 5px 0 30px 0;
}
.product-details__price-cart {
  display: flex;
  padding-top: 30px;
}
.product-details__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
</style>
