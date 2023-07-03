<template>
    <form class="comment-form" @submit.prevent="this.submitForm">
        <div class="comment-form__inputs">
            <InputTextarea v-model="this.formData.text" cols="40" rows="5" class="comment-form__textarea" :placeholder="this.placeholder"></InputTextarea>
        </div>
        <div class="comment-form__button">
            <BtnItem type="submit">Отправить</BtnItem>
        </div>
    </form>
</template>
<script>
    import InputTextarea from './InputTextarea.vue';
    import BtnItem from '@/components/BtnItem.vue';
    export default {
        name: 'CommentForm',
        components: {
            InputTextarea,
            BtnItem
        },
        
        props:{
            placeholder:{
                type: String,
                required: true,
            }
        },
        data(){
            return{
                formData:{
                    text: '',
                },
            }
        },
        methods:{
            async submitForm() {
                this.$emit('submitForm', this.formData)
            },
        }
    };
</script>

<style scoped lang="scss">
    .comment-form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        &__inputs{
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }
        

        &__textarea{
            font-size: 1rem;
            
        }

        &__avatar{
            display: block;
            height: 3.125rem;
            aspect-ratio: 1/1;
            object-fit: cover;
            border-radius: 100%;
        }

        &__button{
            display: flex;
            justify-content: flex-end;
        }
    }
  

</style>