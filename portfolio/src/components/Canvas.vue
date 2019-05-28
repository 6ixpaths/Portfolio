<template>
    <div id="particles-js" class="particles-canvas">
        <button v-on:click="hideCanvas()">CLICK FOR NUDES</button>
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
                "type": "star",
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
                "speed": 3,
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

<style>

.particles-canvas{

    position: absolute;
    /*background-color: #252934;*/
    background-image: url("../assets/canvas/st1.jpg");
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    overflow: hidden;

}

</style>
