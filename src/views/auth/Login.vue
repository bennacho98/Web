<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div>
                    
                    <form action="">
                        <label class="form-label" for="email">E-mail</label>
                        <input class="form-control" type="text" id="email" v-model="form.email">
                        <label class="form-label" for="pass">Contraseña</label>
                        <input class="form-control" type="password" id="pass" v-model="form.password">
                        <input type="button" class="btn btn-primary mt-2" @click="login" value="Ingresar"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return{
            form:{
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            let formData = new URLSearchParams();
            formData.append('email', this.form.email);
            formData.append('password', this.form.password);
            // console.log(formData);
            axios.post('https://lolagroup28.herokuapp.com/login', formData, 
            {
                headers:{
                    "Access-Control-Allow-Methods":"POST",
                    "x-aut-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2MjAwNWY4MDg5YzgzMTVjNTc3NmUiLCJpYXQiOjE2MzMzNzgxNDAsImV4cCI6MTYzMzQ2NDU0MH0.A22MrtDB65pfc348MRMi2O72eQH3m8SLZP3rPmeewIQ"
                }
            }).then((response) => {
                // console.log(response)
                localStorage.setItem('token', response.data.token);
                this.$router.push('/home');
            })
        }
    }
}
</script>