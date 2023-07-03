<template>
    <form class="teams-form" @submit.prevent="this.submitForm">
        
        <FloatingInput v-model="this.formData.name" :placeholder="'Название'"></FloatingInput>
        <FloatingInput v-model="this.formData.description" :placeholder="'Email'" type="email"></FloatingInput>
        <FloatingInput v-model="this.formData.name" :placeholder="'Описание'"></FloatingInput>
        <FloatingInput @onFileSelected="storeFiles" v-model="this.formData.images" :placeholder="'Лого'" type="file"></FloatingInput>
        <div class="teams-form__btns">
            <BtnItem class="teams-form__btn" type="submit" >Добавить команду</BtnItem>
        </div>
    </form>
</template>

<script>
    import FloatingInput from '@/components/FloatingInput.vue';
    import BtnItem from '@/components/BtnItem.vue';
    export default {
        name: 'TeamsForm',
        components:{
            FloatingInput,
            BtnItem,
        },
        data(){
            return{
                formData:{
                    name: '',
                    description: null,
                    email: null,
                    image: '',
                },
            }
        },
        methods:{
            storeFiles(files){
                this.formData.image = files[0];
            },
            async submitForm() {
                this.$emit('submitForm', this.formData)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .teams-form{
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