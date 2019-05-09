<template>
  <div id="app">
    <Nav/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <About/>
    <Skills/>
    <Contact/>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Nav,
    About,
    Skills,
    Contact
  },
  beforeCreate: function() {
      document.body.className = 'home';
  }
}
</script>

<style>
body.home {
    background: #252934;;
}
#app {

color: #ECEFF1;
background: #252934;;
}
</style>
