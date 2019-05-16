<template>
<div class="container-fluid py-5" style="background-color: #E2E2E2;">
    <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>ABOUT</h1>
            <div class="header-bar mx-auto"></div>
        </div>
    </div>    
    <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-7 col-11">
            <div v-for="(aboutinfo, index) in aboutinfos" v-bind:key="aboutinfo.id" class="row my-3 my-sm-5 py-4" v-bind="{'data-aos': index %2 == 0 ? 'fade-left': 'fade-right'}">
                <template v-if="index % 2 != 0">
                    <div class="col-sm-8 col-12 order-sm-1 order-2 text-center">
                        <h2 class=mt-3>{{aboutinfo.header}}</h2>
                        <p class="text-left mt-3">{{ aboutinfo.info }}</p>
                    </div>
                    <div class="col-sm-4 col-12 order-sm-2 order-1 text-center">
                        <img class="img-fluid" v-bind:src="aboutinfo.imgURL" />
                    </div>
                </template>
                <template v-else>
                    <div class="col-sm-4 col-12 text-center">
                        <img class="img-fluid" v-bind:src="aboutinfo.imgURL" />
                    </div>
                    <div class="col-sm-8 col-12 text-center">
                        <h2 class=mt-3>{{aboutinfo.header}}</h2>
                        <p class="text-left mt-3">{{ aboutinfo.info }}</p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import AOS from 'aos'
import "aos/dist/aos.css"

export default {
    name: 'About',
    data(){ 
        return{

            aboutinfos: [
                {
                   header: 'DESIGN',
                   info: 'Build prototype and design wireframes. Bring the latest in design languages to implement elegant and functional in UI/UX for the end user.',
                   imgURL: require('../assets/graphic-design.svg')
                },
                {
                   header: 'BUILD',
                   info: 'Create fully responsive and interactive web pages conveying the message that you need. Can build SPA or full front & backend depending project scope.',
                   imgURL: require('../assets/coding.svg')
                },
                {
                   header: 'DEPLOY',
                   info: 'Help with server setup, migration & hosting. Create quick & fast development pipelines for faster delivery to production',
                   imgURL: require('../assets/server.svg')
                }
            ]
        }
    },
    created: function(){
        
        AOS.init({

            duration: 1000,
            once: true,
            easing: 'ease'

        });

    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

template:first-child{

    background-color: white;

}

h1, h2, p{

    color: #252934;

}

p{

    font-family: 'Roboto', sans-serif;
    font-weight: 400;

}

.header-bar{

    background-color: #252934;

}

img{

    /*height: 8vw;*/
    height: 153.6px;
    object-fit: cover;

}

@media (max-width: 575.98px){

    img{

        height: 205px;

    }

    h2{

        font-size: 1.5rem;

    }

    p{

        text-align: center !important;

    }

}
</style>

