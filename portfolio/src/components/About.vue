<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-8 col-11">
            <div v-for="aboutinfo in aboutinfos" v-bind:key="aboutinfo.id" class="row my-5">
                <div class="col-lg-4 col-4 text-center">
                    <img class="img-fluid" v-bind:src="aboutinfo.imgURL" />
                </div>
                <div class="col-lg-8 col-8 text-center">
                    <h2 class=mt-3>{{aboutinfo.header}}</h2>
                    <p class="text-left mt-3">{{ aboutinfo.info }}</p>
                </div>
                <!--
                <div v-if="isMobile" class="col">
                    <img class="img-fluid" v-bind:src="aboutinfo.imgURL" />
                    <h2 class=mt-3>{{aboutinfo.header}}</h2>
                    <p class="text-left mt-3">{{ aboutinfo.info }}</p>
                </div>
                -->
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
                   info: 'I can create fully responsive and interactive web pages conveying the message that you need',
                   imgURL: require('../assets/computer.svg')
                },
                {
                   header: 'BUILD WHAT YOU WANT',
                   info: 'I can create fully responsive and interactive web pages conveying the message that you need',
                   imgURL: require('../assets/coding.svg')
                }
            ]
        }
    }

}
</script>

<style scoped>
img{

    height: 8vw;
    object-fit: cover;

}

@media (max-width: 575.98px){

    img{

        height: 35vw;

    }

}
</style>

