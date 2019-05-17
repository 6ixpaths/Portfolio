<template>
<div>
    <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenter" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="mt-5 mb-2">
                    <div class="col text-center">
                        <img class="img-fluid img-check" v-bind:src="check"/>
                    </div>
                </div>
                <div class="modal-header">
                    <div class="col">
                        <h2 class="modal-title text-center" id="">THANK YOU</h2>
                        <h2 class="modal-title text-center" id="">{{modalType}}</h2>
                    </div>
                </div>
                <div class="modal-body text-center py-4">
                    <p>I have received your message</p>
                    <p>Will try to reach out to you immediately!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
    name: 'Modal',
    props: ['modalType'],
    data(){
        
        return{

            check: require('../assets/contact/modal/check.svg')

        }

    },
    methods: {

        showModal(modalType){
            
            if(modalType === "success"){

                //Manually set modal options
                /*
                $('#modalCenter').modal({

                    backdrop: true,
                    keyboard: true,
                    focus: true,
                    show: true

                });*/
                $('#modalCenter').modal('show');

            }else{

                console.log("error");
                
            }
        }
    },
    watch: {

        modalType: function(){
            this.showModal(this.modalType);
        }

    }
}
</script>

<style scoped>

#modalCenter{

    padding: 0;

}

h2{

    font-weight: 400;

}

p{

    margin: 0.75rem 0;

}

.img-check{

    height: 250px;

}

.modal-body{

    background-color: #03DAC6;
    color: #004D40;

}

@media (max-width: 575.98px){

    .img-check{

        height: 175px;

    }

    .modal-dialog{

        max-width: 80vw;
        margin: 1.75rem auto;

    }

}

@media (min-width: 576px) and (max-width: 767.98px){

    .img-check{

        height: 200px;

    }

}

</style>

