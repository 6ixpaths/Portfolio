<template>
    <div class='container-fluid'>
        <div class="row align-items-center row justify-content-between index-nav-bar">
            <div class="col-lg-2 col-sm-6 text-center logo-container ml-5">
                <h2 class="logo">SNKRTRDR</h2>
            </div>
            <div class="col-lg-4">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="nav nav-pills nav-fill flex-column flex-sm-row nav-primary">
                            <li class="nav-item">
                                <a class="nav-link" href="#">BECOME A SELLER</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">ABOUT SITE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{% url 'landing:signup' %}">SIGN UP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{% url 'landing:login' %}">LOGIN</a>
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
