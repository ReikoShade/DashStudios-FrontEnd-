<template>
    <div class="minmax-sorting">
        <label class="minmax-sorting__label text">{{ this.label }}</label>
        <div class="minmax-sorting__values-container">
            <div class="minmax-sorting__value">
                <label class="minmax-sorting__value-label text">Мин</label>
                <input 
                    @input="$emit('update:minValue', $event.target.value)"
                    class="minmax-sorting__input text" type="number" :value="minValue" :placeholder="this.placeholder" :min="this.min" :max="this.max">
            </div>
            <div class="minmax-sorting__value">
                <label class="minmax-sorting__value-label text">Макс</label>
                <input 
                    @input="$emit('update:maxValue', $event.target.value)"
                    class="minmax-sorting__input text" type="number" :value="maxValue" :placeholder="this.placeholder" :min="this.min" :max="this.max">
            </div>
        </div>
        
    </div>
    
    
</template>

<script>
    export default{
        name: 'MinMaxSorting',
        emits: ['update:minValue', 'update:maxValue'],
        props:{
        
            label:{ 
                type: String,
                default: "Введите текст"
            },
            min:{
                type: Number,
                default: null
            },
            max:{
                type: Number,
                default: null
            },
            minValue:{
                type: Number,
            },
            maxValue:{
                type: Number,
            }
        }
    }
</script>

<style scoped lang="scss">

    .minmax-sorting{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__values-container{
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 2rem;
        }

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
        
        &__value{
            display: flex;
            gap: 0.5rem;
            width: 100%;
            align-items: center;
        }

        &__value-label{
            font-size: 1rem;
        }
        
    }


</style>