<template>
  <div id="app">
    <Nav v-on:scrollTo="scrollTo()"/>
    <About/>
    <Skills/>
    <Contact class="Contact"/>
    <Footer/>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Nav,
    About,
    Skills,
    Contact,
    Footer
  },
  },
  beforeCreate: function() {
      document.body.className = 'home';
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

h2, a, p{

  font-family: 'Roboto', sans-serif;

}

body.home {
    background: #252934;;
}

#app {

  color: #ECEFF1;
  background: #252934;

}

.header-bar{

    width: 5%;
    height: 4px;
    background-color: #FFFFFF;


}

</style>
