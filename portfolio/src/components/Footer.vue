<template>
    <div class="container mt-5">
        <div class="row justify-content-center my-2">
            <div class="col">
                <div class="row justify-content-center">
                    <a class="mx-1 p-0 py-1" href="#" v-for="icon in icons" v-bind:key="icon.id">
                        <div class="col-12 icon-container text-center p-0">
                            <img class="img-fluid img-icon" v-bind:src="icon"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="row justify-content-center my-3">
            <div class="col-8 text-center">
                <p>RAM RAJA © <span style="color: #04C2C9;">{{ year }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Footer',
    data: function(){
        return{
            year: this.getYear(),
            icons: [

                require('../assets/footer/linkedin.svg'),
                require('../assets/footer/facebook.svg'),
                require('../assets/footer/instagram.svg'),
                require('../assets/footer/github-i.svg'),

            ]
                

            
        }
    },
    methods: {
      
      getYear(){
          var d = new Date();
          return d.getFullYear();

      }

    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

p{

    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #90A4AE;

}

.icon-container{

    background-color: #37474F;
    box-shadow: 0 1px 1px 0 rgba(60,64,67,.08),0 1px 3px 1px rgba(60,64,67,.16);

}

.icon-container:hover{

    background-color: #04C2C9;

}

.img-icon{

    height: 49.7px;

}

</style>
