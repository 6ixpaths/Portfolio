<template>
    <div class='container-fluid py-3'>
        <div class="row align-items-center row justify-content-around index-nav-bar">
            <div class="col-xl-8 col-lg-10 col">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <h1 class="" href="#">RAM RAJA</h1>
                    <button class="navbar-toggler btn-navbar-sm navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="nav nav-pills nav-fill flex-column flex-sm-row nav-primary">
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="scrollTo" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SKILLS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
      
      scrollTo(){

          //Another way to pass to parent without child trigger method with v-on
          //this.$parent.scrollTo();
          this.$emit('scrollTo');
          //console.log(this.$root.name);

      }

    }
}
</script>

<style scoped>

h1{

    margin-bottom: 0;
    color: #90A4AE;
    letter-spacing: 0.375rem;

}

#navbarNav{

    margin-left: 18%;

}

.nav-link{

    font-size: 1.5rem;
    color: #90A4AE;

}

@media (max-width: 575.98px){

    #navbarNav{

        margin-left: 0;

    }

}

</style>



