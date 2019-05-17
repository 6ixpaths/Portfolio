<template>
    <div class="container-fluid py-3 sticky-top" style="background-color: #252934; border-bottom: 3px solid #04C2C9">
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
                                <a class="nav-link" v-on:click="scrollTo($event)" data-target="#target1" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="scrollTo($event)" data-target="#target2" href="#">SKILLS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="scrollTo($event)" data-target="#target3" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Nav',
  methods: {
      
        scrollTo(event){

            event.preventDefault();
            // The id of the section we want to go to.
            var elTarget =  event.target.dataset.target

            // An offset to push the content down from the top.
            var offset = 100;

            // Our scroll target : the top position of the
            // section that has the id referenced by our href.
            var target = $(elTarget).offset().top - offset;
            //var rect = acele.getBoundingClientRect();
            //var target1 = (rect.top + document.documentElement.scrollTop) - offset;

            // The magic...smooth scrollin' goodness.
            $('html, body').animate({scrollTop:target}, 500);

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

.nav-link:hover{

    color: #04C2C9;

}

@media (max-width: 575.98px){

    h1{

        letter-spacing: 0.2rem;

    }

    #navbarNav{

        margin-left: 0;

    }

}

</style>



