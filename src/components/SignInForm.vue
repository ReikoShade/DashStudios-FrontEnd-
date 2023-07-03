<template>
    <form class="signin-form" @submit.prevent="this.submitForm">
        <FloatingInput  v-model="this.formData.email" :placeholder="this.email.placeholder" :type="this.email.type"></FloatingInput>
        <FloatingInput  v-model="this.formData.password" :placeholder="this.password.placeholder" :type="this.password.type"></FloatingInput>
        <div class="signin-form__btns">
            <BtnItem class="signin-form__btn" type="submit">Войти</BtnItem>
            <div class="signin-form__sign-up">
                <p class="text">Нет аккаунта?</p>
                <router-link to="/signup" class="signin-form__sign-up-router-link"> 
                    <p class="text signin-form__sign-up-link">Регистрация</p>
                </router-link>
            </div>
        </div>
    </form>
</template>

<script>
    import FloatingInput from '@/components/FloatingInput.vue';
    import BtnItem from '@/components/BtnItem.vue';
    export default {
        name: 'SignInForm',
        components:{
            FloatingInput,
            BtnItem
        },
        data(){
            return{
                email:{
                    type: "email",
                    placeholder:"E-mail"
                },
                password:{
                    type: "password",
                    placeholder:"Пароль"
                },
                formData:{
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async submitForm() {
                this.$emit('submitForm', this.formData)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .signin-form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        &__btns{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-end;
        }


        &__sign-up{
            display: flex;
            gap: 1.5rem;
            margin-left: auto;
        }

        &__sign-up-router-link{
            text-decoration: none;
        }

        &__sign-up-link{
            color: var(--CoolMint);
            font-weight: 600;
        }
    }

    
</style>