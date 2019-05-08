<template>
    <div class='container-fluid py-3'>
        <div class="row align-items-center row justify-content-around index-nav-bar">
            <div class="col-lg-8 col">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <h2 class="" href="#">RAM RAJA</h2>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="nav nav-pills nav-fill flex-column flex-sm-row nav-primary">
                            <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">WORK</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">CONTACT</a>
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
  name: 'Nav'
}
</script>

<style scoped>

h2{

    margin-bottom: 0;
    color: #90A4AE;

}

#navbarNav{

    margin-left: 25rem;

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



