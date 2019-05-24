<template>
    <div>
        <!-- SUCCESS MODAL -->
        <div class="modal fade" id="modalSuccess" tabindex="-1" role="dialog" aria-labelledby="modalSuccess" aria-hidden="true">
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
                        </div>
                    </div>
                    <div class="modal-body-success text-center py-4">
                        <p>I have received your message</p>
                        <p>Will try to reach out to you immediately!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ERROR MODAL -->
        <div class="modal fade" id="modalError" tabindex="-1" role="dialog" aria-labelledby="modalError" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="mt-5 mb-2">
                        <div class="col text-center">
                            <img class="img-fluid img-check" v-bind:src="error"/>
                        </div>
                    </div>
                    <div class="modal-header">
                        <div class="col">
                            <h2 class="modal-title text-center" id="">ERROR</h2>
                        </div>
                    </div>
                    <div class="modal-body-error text-center py-4">
                        <p>We have encountered an error</p>
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

export default {
    name: 'Modal',
    props: ['modalType'],
    data(){
        
        return{

            check: require('../assets/contact/modal/check.svg'),
            error: require('../assets/contact/modal/error.svg')

        }

    },
    methods: {

        showModal(status){
            
            if(status === "success"){

                //Manually set modal options
                /*
                $('#modalCenter').modal({

                    backdrop: true,
                    keyboard: true,
                    focus: true,
                    show: true

                });*/
                $('#modalSuccess').modal('show');

            }else{

                $('#modalError').modal('show');
                console.log("modal error");
                this.status = null;
            }
        }
    },
    watch: {
        
        modalType: function(){

           if(this.modalType != null){
                console.log("STATUS RECEIVED: " + this.modalType)
                this.showModal(this.modalType);

            }

        }

    }
}
</script>

<style scoped>

#modalSuccess, #modalError{

    padding: 0 !important;

}

h2{

    font-weight: 400;

}

p{

    margin: 0.75rem 0;

}

.img-check{

    height: 200px;

}

.modal-body-success{

    background-color: #03DAC6;
    color: #004D40;

}

.modal-body-error{

    background-color: #EF5350;
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

