<template>
    <nav class="navbar" id="navbar-full">
        <div class="navbar__links">
            <router-link to="/" class="navbar__logo-link"> 
                <img src="@/assets/logo.svg" alt="" class="navbar__logo">
            </router-link>
            <div class="navbar__links-wrapper">
                <router-link to="/games" class="link"> 
                    <p class="link__text headline headline_small">
                        Игры
                    </p>
                </router-link>
                <router-link to="/teams" class="link"> 
                    <p class="link__text headline headline_small">
                        Команда
                    </p>
                </router-link>
                <router-link to="/company" class="link"> 
                    <p class="link__text headline headline_small">
                        Компания
                    </p>
                </router-link>
            </div>
        </div>
        <div class="navbar__account">
            <router-link v-if="this.user.attributes.name" to="/user/" class="link"> 
                    <p class="link__text headline headline_small">
                        {{this.user.attributes.name}}
                    </p>
            </router-link>
            <router-link v-else to="/signin" class="link"> 
                    <p class="link__text headline headline_small">
                        Войти
                    </p>
            </router-link>
            
        </div>
    </nav>
    <div class="burger-menu" id="navbar-burger">
        <Slide :closeOnNavigation="true" class="burger-menu__slide" id="navbar-burger-slide">
            <div class="burger-menu__links">
                <router-link to="/" class="burger-menu__logo-link navbar__logo-link"> 
                    <img src="@/assets/logo.svg" alt="" class="navbar__logo">
                </router-link>
                <div class="burger-menu__links-wrapper navbar__links-wrapper">
                    <router-link to="/games" class="burger-menu__link link"> 
                        <p class="link__text headline headline_medium">
                            Игры
                        </p>
                    </router-link>
                    <router-link to="/teams" class="burger-menu__link link"> 
                        <p class="link__text headline headline_medium">
                            Команда
                        </p>
                    </router-link>
                    <router-link to="/company" class="burger-menu__link link"> 
                        <p class="link__text headline headline_medium">
                            Компания
                        </p>
                    </router-link>
                </div>
                <div class="burger-menu__account navbar__account">
                    <router-link v-if="this.user.attributes.name" to="/user/" class="link"> 
                            <p class="link__text headline headline_small">
                                {{this.user.attributes.name}}
                            </p>
                    </router-link>
                    <router-link v-else to="/signin" class="link"> 
                            <p class="link__text headline headline_small">
                                Войти
                            </p>
                    </router-link>
                </div>
            </div>
        </Slide>
        <router-link to="/" class="burger-menu__logo"> 
                <img src="@/assets/logo.svg" alt="" class="burger-menu__logo-img">
        </router-link>
    </div>
    
</template>

<script>
    import { Slide } from 'vue3-burger-menu';
    import apiCheck from '../apiCheck.js';
    export default{
        name: 'NavbarItem', 
        components:{
            Slide
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
            }
        },
        methods: {
            async getUser(){
                apiCheck.post("http://127.0.0.1:8000/api/auth/me")
                .then((response) => {
                    this.user = response.data;
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

<style scoped lang="scss">
    .navbar{
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1rem 6%;
        background-color: var(--SmoothBlack);
        backdrop-filter: blur(5px);
        border-radius: 0 0 0.625em 0.625em;

        &__logo-link{
            display: block;
            width: 128px;
            height: 24px;
        }

        &__logo{
            max-width: 100%;
        }

        &__links-wrapper{
            display: flex;
            gap: 2.5em;
        }

        &__links{
            display: flex;
            align-items: center;
            gap: 10rem;
        }

        &__link_active{
            color: var(--White);
        }
    }

    .burger-menu{
        display: none;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;

        &__logo{
            max-height: 30px;
        }

        &__logo-img{
            max-height: inherit;
        }

        &__slide{
            gap: 16rem;
        }

        &__link{
            font-size: 2rem;
        }
        &__links{
            display: flex;
            flex-direction: column;
            gap: 6rem;
        }
        &__links-wrapper{
            flex-direction: column;
            gap: 2em;
        }
    }


    @media screen and (max-width: 1023px) {


        #navbar-full{
            display: none;
        }


        #navbar-burger{
            display: flex;
        }
    }


    @media screen and (max-width: 375px) {
        .burger-menu{
            &__logo{
                max-height: 20px;
            }
        }
    }

</style>