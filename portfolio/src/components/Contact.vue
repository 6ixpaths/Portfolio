<template>
    <div class='container-fluid my-5 py-5' style="background-color:#212121;"><!--
 <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
      <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
    </svg>-->       
        <div class="row mb-4">
            <div class="col-12 text-center mb-4">
                <h1>CONTACT</h1>
                <div class="header-bar mx-auto"></div>
                <p class="mt-4">Have a question or want to work together?</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8 col-11">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <div class="input-group-prepend">
                            <span class="input-group-text input-prepend" id="basic-addon1"><img src="../assets/contact/person.svg"/></span>
                            <input class="form-control" id="" aria-describedby="basic-addon1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name">Subject</label>
                        <div class="input-group-prepend">
                            <span class="input-group-text input-prepend" id="basic-addon1"><img src="../assets/contact/book.svg"/></span>
                            <input class="form-control" id="" aria-describedby="basic-addon1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name">Email Address</label>
                        <div class="input-group-prepend">
                            <span class="input-group-text input-prepend" id="basic-addon1"><img src="../assets/contact/inbox.svg"/></span>
                            <input class="form-control" id="">
                        </div>
                    </div>
                    <div class="form-group">

                        <label for="exampleFormControlTextarea1">Message</label>
                        <div class="input-group-prepend">
                            <span class="input-group-text input-prepend" id="basic-addon1"><img src="../assets/contact/pencil.svg"/></span>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-submit my-2">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

p{

    color: #04C2C9;
    font-size: 1.25rem;
    font-weight: 300;
}

label{

    color: #90A4AE;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;    

}

.input-prepend{

    border-radius: 0;
    border-color: #455A64;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
    background-color: #263238;

}

img{

    height: 21px;

}

input, input:focus, textarea, textarea:focus{

    border-radius: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-color: #455A64;
    background-color: #37474F;
}
/*
textarea{

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

}
*/
.btn-submit{

    width: 15%;
    font-size: 1.25rem;
    background-color: #04C2C9;
    border: none;
    border-radius: 0;

}

.btn-submit:hover{

    background-color: #018786;

}

@media (max-width: 575.98px){

    .btn-submit{

        width: 90px;

    }

}

</style>



