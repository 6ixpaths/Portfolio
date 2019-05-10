<template>
    <div class="container-fluid my-5">
        <div class="row my-5">
            <div class="col-12 text-center mb-4">
                <h1>SKILLS</h1>
                <div class="header-bar mx-auto"></div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-10 col-12">
                <div class="row justify-content-center">
                    <div class="col-sm-2 col-12">
                        <div class=row>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/postgresql.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/digitalocean.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/nginx.svg' />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 col-12 col-offset">
                        <div class=row>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/vuejs.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/javascript.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/npm.svg' />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 col-12">
                        <div class=row>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/java-icon.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/python.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/django.svg' />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 col-12 col-offset">
                        <div class=row>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/html5.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/css3.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/sass.svg' />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 col-12">
                        <div class=row>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/vscode.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/github.svg' />
                            </div>
                            <div class="col-sm-12 col-4 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/bootstrap.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--
            <div class="row kotai" v-for="(coli, index) in cols" v-bind:key="coli.id">
                <template>
                    <div class="col-4 col-offset">
                        {{coli.colicons}}
                        <div class=row v-for="inde">
                            <div class="col-sm-12 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/postgresql.svg' />
                            </div>
                            <div class="col-sm-12 icon-container text-center">
                                <img class="img-fluid img-icon" src='../assets/skill_icons/digitalocean.svg' />
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            -->
            <!--
            <div class="col-lg-4 icon-container text-center px-3 py-5" v-for="icon in icons" v-bind:key="icon.id">
                <img class="img-fluid img-icon" v-bind:src="icon" />
            </div>-->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    data(){
        return{

            cols: [
                {
                colicons: [
                    require('../assets/skill_icons/postgresql.svg'),
                    require('../assets/skill_icons/digitalocean.svg'),
                ],
                colicons: [
                    require('../assets/skill_icons/java-icon.svg'),
                    require('../assets/skill_icons/python.svg'),
                    require('../assets/skill_icons/django.svg'),
                ],
                colicons: [
                    require('../assets/skill_icons/vuejs.svg'),
                    require('../assets/skill_icons/javascript.svg'),
                ]
                
                //require('../assets/skill_icons/postgresql-icon.svg')
                }
            ]

        }
    }
}
</script>

<style scoped>

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
