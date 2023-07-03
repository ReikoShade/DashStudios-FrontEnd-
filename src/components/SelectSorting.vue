<template>
    <div class="select-sorting">
        <label class="select-sorting__label text">{{this.label}}</label>
        <select class="select-sorting__select text"  @input="$emit('update:modelValue', $event.target.value)">
            <option :value="undefined"></option>
            <option class="select-sorting__option text" v-for="option in options" :key="option.id" :value="option.id" > {{ option.attributes.name }}</option>
        </select>
    </div>
    
    
</template>

<script>
    export default{
        name: 'SelectSorting',
        emits: ['update:modelValue'],
        props:{
            label:{ 
                type: String,
                default: "Выбор"
            },
            
            options: 
                
            {
                type: Object,
            },
                
        },
    }
</script>

<style scoped lang="scss">
    .select-sorting{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__select{
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
        
        &__option{
            display: flex;
            background-color: var(--SmoothBlack);
        }
    }


</style>