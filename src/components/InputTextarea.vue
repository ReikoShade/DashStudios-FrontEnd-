<template>
    <!-- <div class="overlapping-input">
        <textarea class="text-input text" placeholder="Введите текст комментария"></textarea>
        <label class="overlapping-input__label text text_small">Комментарий</label>
    </div>
     -->
    <textarea @input="$emit('update:modelValue', $event.target.value)" class="text-input text" :placeholder="this.placeholder"></textarea>
</template>

<script>
    export default{
        name: 'InputTextarea',
        emits: ['update:modelValue'],
        props:{
            modelValue:{
            },
            placeholder:{
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped lang="scss">
    .text-input{
        position: relative;
        display: flex;
        // order: 2;
        width: 100%;
        border: none;
        // border: 2px solid var(--Gray);
        background-color: var(--LightSmoothBlack);
        border-radius: 10px;
        // background-color: transparent;
        padding: 1rem 2rem;
        color: var(--White);
        transition: border 10s;
        resize: none;

        &::placeholder{
            color: var(--DarkGray);
        }
        &:focus + .overlapping-input__label{
            color: var(--White);
        }
    }


</style>