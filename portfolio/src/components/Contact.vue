<template>
    <div class='container-fluid my-5'><!--
 <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
      <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
    </svg>-->       
        <div class="row justify-content-center">
            <div class="col-12 text-center mb-4">
                <h1>CONTACT</h1>
                <div class="header-bar mx-auto"></div>
                <p class="mt-4">Have a question or want to work together?</p>
            </div>
            <div class="col-lg-5">
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
                        <label for="name">Email address</label>
                        <div class="input-group-prepend">
                            <span class="input-group-text input-prepend" id="basic-addon1"><img src="../assets/contact/inbox.svg"/></span>
                            <input class="form-control" id="">
                        </div>
                    </div>
                    <div class="form-group">

                        <label for="exampleFormControlTextarea1">Example textarea</label>
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

.header-bar{

    width: 110px;
    height: 4px;
    background-color: #FFFFFF;


}

p{

    color: #04C2C9;
    font-size: 1.25rem;
}

label{

    color: #90A4AE;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;    

}

.input-prepend{


    background-color: #FFFFFF;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

img{

    height: 1.25vw;

}

input{

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

}

textarea{

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

}

.btn-submit{

    width: 15%;
    font-size: 1.25rem;
    background-color: #04C2C9;
    border: none;

}

.btn-submit:hover{

    background-color: #018786;

}

@media (max-width: 575.98px){

    img{

        height: 5.25vw;

    }

}

</style>



