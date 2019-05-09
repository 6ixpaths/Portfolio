<template>
  <div id="app">
    <Nav/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <About/>
    <Contact/>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Nav,
    About,
    Contact
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
