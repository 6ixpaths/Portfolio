<template>
    <div class='container-fluid my-5'>
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <h2>CONTACT</h2>
                <p>Have a question or want to work together?</p>
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

label{

    color: #673AB7;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;    

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

@media (max-width: 575.98px){


}

</style>



