<template>
    <NavbarItem></NavbarItem>
    <div class="page-container padding-top padding-top_big ">
        <section class="container container_main page-block">
           <div class="sign-in">
                <h1 class="headline">
                    Вход
                </h1>
                <div class="sign-in__form-container">
                    <SignInForm @submitForm="login"></SignInForm>
                </div>
            </div>
        </section>
    </div>
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    import SignInForm from '@/components/SignInForm.vue';
    import axios from 'axios';
    import api from '../api.js';
    import qs from 'qs';


    export default {
        name: 'SignInPage',
        components:{
            NavbarItem,
            FooterItem,
            SignInForm,
        },
        data(){
        },
        methods:{
			login(data){
                axios.request({
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:8000/api/auth/login',
                    headers: { 
                        'Accept': 'application/json', 
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data : qs.stringify({
                        'email': `${data.email}`,
                        'password': `${data.password}`,
                    }),
                })
                .then((response) => {
                    localStorage.access_token = response.data.access_token;
                    this.$router.push({name: 'user'});

                    api.post("http://127.0.0.1:8000/api/auth/me")
                        .then((response) => {
                            this.user = response.data;
                            if(response.data.attributes.isAdmin){
                                localStorage.is_admin = true;
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    
                })
                .catch((error) => {
                    console.log(error);
                    alert('Ошибка!');
                });


                
			},

            
        }
    }
</script>

<style lang="scss" scoped>
    .sign-in{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 4rem;
        width: clamp(18.75rem, 50%, 30rem);
        margin: 0 auto;

        &__form-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    
</style>