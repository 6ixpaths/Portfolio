<template>
  <div id="app">
    <Nav/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Nav
  },
  beforeCreate: function() {
      document.body.className = 'home';
  }
}
</script>

<style>
body.home {
    background: #263238;
}
#app {

color: #ECEFF1;
background: #263238;
}
</style>
