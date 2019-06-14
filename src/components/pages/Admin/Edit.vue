<template lang="html">
  <div class="">
    <div class="title">
      <h1>This is Admin/Edit/{{ $route.params.id }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    console.log(this.$route.params.id);
  }
}
</script>

<style lang="css" scoped>
</style>
