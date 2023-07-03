<template>
    <NavbarItem></NavbarItem>
    <div class="page-container padding-top padding-top_big ">
        <section class="container container_main page-block">
           <div class="user">
            <div class="user__profile">
                <div class="user__profile-header">
                    <h2 class="headline">Личный кабинет</h2>
                    <p v-if="this.user.attributes.isAdmin" class="text user__profile-status-text">Вы администратор</p>
                </div>
                
                <div class="user__form-container">
                    <p class="name text">Имя:  <span class="headline headline_small">{{this.user.attributes.name}} </span> </p>
                    <p class="name text">Почта:  <span class="headline headline_small">{{this.user.attributes.email}} </span> </p>
                    <!-- <UserForm :user="this.user"></UserForm> -->
                </div>
            </div>
            <div class="user__quit">
                <BtnItem @click.prevent="logout" :isSecondary="true">Выйти</BtnItem>
            </div>
                
           </div>
        </section>
    </div>
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    // import UserForm from '@/components/UserForm.vue';
    import BtnItem from '@/components/BtnItem.vue';
    import api from '../api.js';

    export default {
        name: 'UserPage',
        components:{
            NavbarItem,
            FooterItem,
            // UserForm,
            BtnItem
        },
        data(){
            return{
                user:{
                    id: null,
                    attributes:{
                        name: "",
                        email: "",
                        isAdmin: false,
                    }
                    
                },
                name:{
                    placeholder:"Имя пользователя"
                },
                email:{
                    type: "email",
                    placeholder:"E-mail"
                }
            }
        },
        methods: {
            async getUser(){
                api.post("http://127.0.0.1:8000/api/auth/me")
                .then((response) => {
                    this.user = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            async logout(){
                api.post("http://127.0.0.1:8000/api/auth/logout")
                .then(() => {
                    localStorage.clear();
                    this.$router.go(0);
                    // this.$router.push({name: 'singin'});
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        created() {
            this.getUser();
        },
    }
</script>

<style lang="scss" scoped>
    .user{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: clamp(14rem, 30%, 40rem);
        margin: 0 auto;
        &__profile{
            display: flex;
            flex-direction: column;
            gap: 4rem;
            
        }
        &__profile-header{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        &__profile-status-text{
            color: var(--CoolMint);
        }
        &__avatar-container{
            width: clamp(10rem, 70%, 30rem);
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        &__avatar-img{
            display: block;
            width: inherit;
            aspect-ratio: 1/1;
            border-radius: 100%;
        }

        &__form-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        

        &__quit{
            margin-left: auto;
        }
    }

    
</style>