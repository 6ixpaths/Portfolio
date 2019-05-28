<template>
<div>
    <div id="particles-js" class="particles-canvas">
        <div class="container-fluid h-100 container-canvas">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-12 text-center">
                    <h1>RAM RAJA</h1>
                    <h2>FULL STACK WEB DEVELOPER</h2>
                    <button v-on:click="hideCanvas()" type="button" class="btn btn-outline-primary btn-enter mt-5">ENTER</button>
                </div>
            </div>
        </div>
    </div>
    
</div>    
</template>


<script>
import 'particles.js/particles.js';
const particlesJS = window.particlesJS;
//import 'particles.js';
//require('particlesjs')

export default {
    name: 'Canvas',
    methods: {

        hideCanvas(){

            console.log("CANVAS CHILD CLICKED");
            this.$emit('hideCanvasComp', true);
        }

    },
    mounted: function(){

        particlesJS('particles-js',{

            "particles": {
                "number": {
                "value": 33,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
                },
                "color": {
                "value": "#ffffff"
                },
                "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 4000,
                    "height": 500
                }
                },
                "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
                },
                "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
                },
                "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
                },
                "move": {
                "enable": true,
                "speed": 2,
                "direction": "top",
                "random": true,
                "straight": true,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
                },
                "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                    "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
                }
            },
            "retina_detect": false
            }

        );

    }    
}
</script>

<style scoped>

@font-face {
  font-family: "Benguiat-Outline";
  src: url('../assets/fonts/PLBenguiatCaslon-Outline.otf');
}
@font-face {
  font-family: "Benguiat-Shadow";
  src: url('../assets/fonts/PLBenguiatCaslon-Shadow.otf');
}
@font-face {
  font-family: "Benguiat";
  src: url('../assets/fonts/PLBenguiatCaslon.otf');
}
/*@import url("../assets/fonts/PLBenguiatCaslon-Outline.otf");*/

h1{

    font-family: "Benguiat-Outline";
    font-size: 9.5rem;
    color: transparent;
    -webkit-text-stroke-width: 2.5px;
    -webkit-text-stroke-color: #ff1515;
    /*letter-spacing: 0.5rem;*/

}

h2{

    font-family: "Benguiat";
    font-size: 3.5rem;
        color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #ff1515;

}

.container-canvas{

    position: absolute;

}

.btn-enter{

    font-family: "Benguiat";
    color: #ff1515;
    border-color: #ff1515;
    width: 175px;
    font-size: 2rem;

}

.btn-enter:hover{

    background-color: #ff1515;
    border-color: #ff1515;

}

 .btn-enter:active{
    
    background-color: #ff1515 !important;
    border-color: #ff1515 !important;
    border-color: #ff1515 !important;

 }

.particles-canvas{

    position: absolute;
    /*background-color: #252934;*/
    background-image: url("../assets/canvas/st1.jpg");
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;

}

</style>
