<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav" >
          <li class="nav-item"><router-link class="nav-link active" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/admin">Admin</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/cart">Cart</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>

    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
li {
  list-style: none;
}
</style>
