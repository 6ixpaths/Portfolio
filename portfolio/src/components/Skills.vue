<template>
    <div class="container-fluid mb-5 py-5" style="background-color: #252934;">
        <div class="row mb-5">
            <div class="col-12 text-center mb-4">
                <h1>SKILLS</h1>
                <div class="header-bar mx-auto"></div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-10 col-12">
                <div class="row justify-content-center">
                    <div v-for="(skillIcons, index) in getColumnArray" style="color:white;" v-bind:key="skillIcons.id" v-bind:class="[{'col-offset' : index % 2 != 0}, 'col-sm-2 col-12']">
                        <div class=row>
                            <div v-for="skillIcon in skillIcons" v-bind:key="skillIcon.id" class="col-sm-12 col-4 icon-container text-center" data-aos="flip-up">
                                <img class="img-fluid img-icon" v-bind:src="skillIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash"
import AOS from 'aos'
import "aos/dist/aos.css"

export default {
    name: 'Skills',
    data(){
        return{

            skillIcons: [

                require('../assets/skill_icons/postgresql.svg'),
                require('../assets/skill_icons/digitalocean.svg'),
                require('../assets/skill_icons/nginx.svg'),
                require('../assets/skill_icons/vuejs.svg'),
                require('../assets/skill_icons/javascript.svg'),
                require('../assets/skill_icons/npm.svg'),
                require('../assets/skill_icons/java-icon.svg'),
                require('../assets/skill_icons/python.svg'),
                require('../assets/skill_icons/django.svg'),
                require('../assets/skill_icons/html5.svg'),
                require('../assets/skill_icons/css3.svg'),
                require('../assets/skill_icons/sass.svg'),
                require('../assets/skill_icons/vscode.svg'),
                require('../assets/skill_icons/github.svg'),
                require('../assets/skill_icons/bootstrap.svg')

            ]
        }
    },
    computed:{

        getColumnArray(){

            return _.chunk(this.skillIcons, 3)

        }


    },
    created: function(){
        
        AOS.init({

            duration: 1000,
            once: true,
            easing: 'ease-in-out-cubic'

        });

    }
}
</script>

<style scoped>

h1{

    color: #ECEFF1;

}

.col-offset{

    margin-top: 6.25%;

}

.icon-container{

    padding: 3rem 1.25rem;
    border: 1px solid #04C2C9;;

}

.img-icon{

    height: 8vw;

}

@media (max-width: 575.98px){

    .col-offset{

        margin-top: 0;
        
    }

    .icon-container{

        padding: 1rem 0.5rem;

    }

    .img-icon{

        height: 12vw;

    }
}

</style>
