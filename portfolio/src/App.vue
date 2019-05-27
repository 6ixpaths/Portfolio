<template>
    <div id="app">
        <Canvas/>
        <!--<Nav v-on:scrollTo="scrollTo($event)"/>-->
        <Nav/>
        <About id="target1"/>
        <Skills id="target2"/>
        <Contact id="target3"/>
        <Footer id="target4"/>
    </div>
</template>

<script>

import Canvas from "./components/Canvas.vue";
import Nav from "./components/Nav.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Canvas,
    Nav,
    About,
    Skills,
    Contact,
    Footer
  },
  methods: {
    /*
    scrollTo(event){
      
     event.preventDefault();
      console.log("CLICKAZZ");
      // The id of the section we want to go to.
      var ele = $("#el1").data("target");
      var ele2 =  event.target.dataset.target
      //var ele1 = this.dataset.target.slice(1);
      //var acele = document.getElementById(ele1); 
      // An offset to push the content down from the top.
      var offset = 0;
      console.log("SELECTED BY JQUERY:" + ele);
      console.log("SELECTED BY VUE:" + event.target.dataset.target);
      //console.log(ele1)
      // Our scroll target : the top position of the
      // section that has the id referenced by our href.
      var target = $(ele2).offset().top - offset;
      //var rect = acele.getBoundingClientRect();
      //var target1 = (rect.top + document.documentElement.scrollTop) - offset;

      console.log(target);
      //console.log(target1);
  
      // The magic...smooth scrollin' goodness.
      $('html, body').animate({scrollTop:target}, 500);
      //$('#app').innerHtml = "KOTTAI";

      
    }*/
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");

h2,a,p {

  font-family: "Roboto", sans-serif;

}

body{

  background-color: #252934;

}

.header-bar {
  width: 95px;
  height: 4px;
  background-color: #ECEFF1;
}

</style>
