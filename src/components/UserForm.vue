<template>
    <form class="user-form">
        <FloatingInput v-model="this.formData.name" :placeholder="this.name.placeholder" :value="this.user.name"></FloatingInput>
        <FloatingInput v-model="this.formData.email" :placeholder="this.email.placeholder" :type="this.email.type" :value="this.user.email"></FloatingInput>
        <BtnItem class="user-form__btn" :isDisabled="true" type="submit">Изменить</BtnItem>
    </form>
</template>

<script>
    import FloatingInput from '@/components/FloatingInput.vue';
    import BtnItem from '@/components/BtnItem.vue';
    export default {
        name: 'UserForm',
        components:{
            FloatingInput,
            BtnItem
        },
        props:{
            user:{
                type: Object,
                require: true,
                name:{
                    type: String,
                    require: true
                },
                email:{
                    type: String,
                    require: true
                },
                imgPath:{
                    type: String,
                    require: true
                },
            }
        },
        data(){
            return{
                name:{
                    placeholder:"Имя пользователя"
                },
                email:{
                    type: "email",
                    placeholder:"E-mail"
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user-form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        &__btn{
            margin-left: auto;
        }
    }

    
</style>