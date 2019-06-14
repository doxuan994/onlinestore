<template lang="html">
  <form @submit.prevent="saveProduct" class="row">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" placeholder="name" v-validate="'required'" v-model="name" :class="{'form-control': true, 'error': errors.has('name')}" />
        <span class="small text-danger" v-show="errors.has('name')">Name is required.</span>
      </div>



      <div class="form-group">
        <label>Price</label>
        <input
        type="number"
        class="form-control"
        placeholder="Price"
        v-model="price"
        v-validate="'required'"
        name="price"
        :class="{'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
      </div>

      <div class="form-group">
        <label>Manufacturer</label>
        <select type="text" name="manufacturer" class="form-control" v-validate="'required'" v-model="manufacturer" :class="{'form-control': true, 'error': errors.has('manufacturer')}">
          <option v-for="manufacturer in manufacturers">{{ manufacturer }}</option>
        </select>
        <span class="small text-danger" v-show="errors.has('manufacturer')">Manufacturer is required.</span>
      </div>
    </div>

    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input type="text" name="image" placeholder="image" v-validate="'required|url'" v-model="image" :class="{'form-control': true, 'error': errors.has('image')}" />
        <span class="small text-danger" v-show="errors.has('image')">Image is required.</span>
      </div>

      <div class="form-group">
        <label>Description</label>
        <textarea
        type="text"
        class="form-control"
        placeholder="Description"
        rows="5"
        v-model="description"
        v-validate="'required'"
        name="description"
        :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
        <span class="small text-danger" v-show="errors.has('description')">Description is required</span>
      </div>

      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  props: ['isEditing'],
  data() {
    return {
      name: '',
      manufacturers: ['Sony', 'Apple', 'Samsung', 'OnePlus', 'Google'],
      manufacturer: '',
      image: '',
      description: '',
      price: null,
    }
  },
  methods: {
    saveProduct() {
      this.$validator.validateAll().then((response) => {
        if (response) {
          // console.log(this.name);
          // console.log(this.price);
          // console.log(this.manufacturer);
          // console.log(this.image);
          // console.log(this.description);

          alert(
            "Product Name: " + this.name +
            "\nPrice: " + this.price +
            "\nManufacturer: " + this.manufacturer +
            "\nImage URL: " + this.image +
            "\nDescription: " + this.description
          );
        }
      }).catch(() => {
        console.log("Errors");
      });
    }
  }
}
</script>

<style scoped>

</style>
