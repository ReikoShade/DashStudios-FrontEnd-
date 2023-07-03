<template>
    <div class="input-sorting">
        <label class="input-sorting__label text">{{this.label}}</label>
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            class="input-sorting__input text" :type="this.type" :modelValue="this.value" :placeholder="this.placeholder" :min="this.min" :max="this.max">
    </div>
    
    
</template>

<script>
    export default{
        emits: ['update:modelValue'],
        name: 'InputSorting',
        props:{
            label:{ 
                type: String,
                default: "Введите текст"
            },
            type:{
                type: String,
                default: "text"
            },
            modelValue:{
                type: String,
                default: ""
            },
            min:{
                type: Number,
                default: null
            },
            max:{
                type: Number,
                default: null
            }
        }
    }
</script>

<style scoped lang="scss">
    .input-sorting{
        

    }

    .input-sorting{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__input{
            display: flex;
            width: 100%;
            border: 2px solid var(--DarkGray);
            background-color: transparent;
            border-radius: 10px;
            padding: 0.5rem 1rem;
            color: var(--White);
            transition: border 10s;
            resize: none;
            z-index: 2;
            box-sizing: border-box;
            transition: border 1s ease-in-out;
        }

        &__label{
            display: flex;
            color: var(--White);
        }
        
    }


</style>