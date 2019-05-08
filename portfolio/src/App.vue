<template>
  <div id="app">
    <Nav/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <About/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Nav,
    About
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
