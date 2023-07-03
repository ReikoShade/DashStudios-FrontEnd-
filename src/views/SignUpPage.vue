<template>
    <NavbarItem></NavbarItem>
    <div class="page-container padding-top padding-top_big ">
        <section class="container container_main page-block">
           <div class="sign-in">
                <h1 class="headline">
                    Регистрация
                </h1>
                <div class="sign-in__form-container" >
                    <SignUpForm @submitForm="store"></SignUpForm>
                </div>
            </div>
        </section>
    </div>
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    import SignUpForm from '@/components/SignUpForm.vue';
    import axios from 'axios';
    import qs from 'qs';
    // import BtnItem from '@/components/BtnItem.vue';
    export default {
        name: 'SignUpPage',
        components:{
            NavbarItem,
            FooterItem,
            SignUpForm,
            // BtnItem
        },
        data(){
            
        },
        methods:{
			store(data){
                axios.request({
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:8000/api/users',
                    headers: { 
                        'Accept': 'application/json', 
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data : qs.stringify({
                        'name': `${data.name}`,
                        'email': `${data.email}`,
                        'password': `${data.password}`,
                        "password_confirmation": `${data.passwordConfirm}` 
                    }),
                })
                .then(() => {
                    // console.log(JSON.stringify(response.data));
                    this.$router.push({name: 'signin'});
                })
                .catch((error) => {
                    console.log(error);
                    alert('Ошибка!');
                });
			}
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