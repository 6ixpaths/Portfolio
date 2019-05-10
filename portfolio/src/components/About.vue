<template>
<div class="container-fluid py-5" style="background-color: #E2E2E2;">
    <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>ABOUT</h1>
            <div class="header-bar mx-auto"></div>
        </div>
    </div>    
    <div class="row justify-content-center">
        <div class="col-lg-5 col-11">
            <div v-for="(aboutinfo, index) in aboutinfos" v-bind:key="aboutinfo.id" class="row my-5 py-4">
                <template v-if="index % 2 != 0">
                    <div class="col-lg-8 col-12 order-lg-1 order-2 text-center">
                        <h2 class=mt-3>{{aboutinfo.header}}</h2>
                        <p class="text-left mt-3">{{ aboutinfo.info }}</p>
                    </div>
                    <div class="col-lg-4 col-12 order-lg-2 order-1 text-center">
                        <img class="img-fluid" v-bind:src="aboutinfo.imgURL" />
                    </div>
                </template>
                <template v-else>
                    <div class="col-lg-4 col-12 text-center">
                        <img class="img-fluid" v-bind:src="aboutinfo.imgURL" />
                    </div>
                    <div class="col-lg-8 col-12 text-center">
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
export default {
    name: 'About',
    data(){ 
        return{

            aboutinfos: [
                {
                   header: 'DESIGN WHAT YOU WANT',
                   info: 'Build prototype and wireframes. Bring the best in UI/UX development.',
                   imgURL: require('../assets/graphic-design.svg')
                },
                {
                   header: 'BUILD WHAT YOU WANT',
                   info: 'I can create fully responsive and interactive web pages conveying the message that you need. Can build SPA or full front & backend depending on your need.',
                   imgURL: require('../assets/coding.svg')
                },
                {
                   header: 'HELP DEPLOY',
                   info: 'Help with server setup, migration & hosting. Manage servers so that you don\'t have to.',
                   imgURL: require('../assets/server.svg')
                }
            ]
        }
    }

}
</script>

<style scoped>

template:first-child{

    background-color: white;

}

h1, h2, p{

    color: #252934;

}

.header-bar{

    background-color: #252934;

}

img{

    height: 8vw;
    object-fit: cover;

}

@media (max-width: 575.98px){

    img{

        height: 50vw;

    }

    h2{

        font-size: 1.5rem;

    }

    p{

        text-align: center !important;

    }

}
</style>

