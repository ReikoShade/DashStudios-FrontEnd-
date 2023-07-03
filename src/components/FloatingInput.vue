<template>
    <div class="floating-input">
        <textarea @input="$emit('update:modelValue', $event.target.value)" :modelValue="this.inputValue" class="text-input text" v-if="this.type==='textarea'" cols="30" rows="10" required></textarea>
        <select @input="$emit('update:modelValue', $event.target.value)" :modelValue="this.inputValue" v-else-if="this.type==='select'" class="text-input text" required >
            <option class="floating-input__option text" v-for="option in options" :key="option.id" :value="option.id"> {{ option.attributes.name }}</option>
            <!-- <option :options="this.options" class="floating-input__option text" v-for="option in options" :key="option.value" > {{ option.label }}</option> -->
        </select>
        <input v-else-if="this.type==='file'" @change="onFileSelected" @input="$emit('update:modelValue', $event.target.value)" :modelValue="this.inputValue" class="text-input text" :type="this.type" :min="this.min" :max="this.max" placeholder="photo" multiple required>
        <input step="any"  @input="$emit('update:modelValue', $event.target.value)" :modelValue="this.inputValue" class="text-input text" v-else :type="this.type" :min="this.min" :max="this.max" placeholder="text" required>
        <label class="floating-input__label text">{{this.placeholder}}</label>
    </div>
    
    
</template>

<script>
    export default{
        name: 'FloatingInput',
        emits: ['update:modelValue'],
        props:{
            modelValue:{
            },
            placeholder:{ 
                type: String,
                default: "Введите текст"
            },
            type:{
                type: String,
                default: "text"
            },
            inputValue:{
            },
            options:{
                type: Object,
            },
        },
        data(){
            return{
                files: null
            }
            
        },
        methods:{
            onFileSelected(event) {
                this.files = event.target.files;
                this.$emit('onFileSelected', this.files )
            }
        }
    }
</script>

<style scoped lang="scss">
    .text-input{
        position: relative;
        display: flex;
        width: 100%;
        border: 2px solid var(--DarkGray);
        background-color: transparent;
        border-radius: 10px;
        padding: 1rem 2rem;
        color: var(--White);
        transition: border 10s;
        resize: none;
        z-index: 2;
        box-sizing: border-box;
        transition: border 1s ease-in-out;

        &::placeholder {
            display: none;
            opacity: 0;
            visibility: hidden;
        }

        

        &:valid {
            border-color: var(--Gray);
        }

        &:valid ~ .floating-input__label {
            font-size: 1rem;
            top: -100%;
            background-color: var(--SmoothBlack);
            
            left: 0.75rem;
            z-index: 3;
            color: var(--White);
            // transition: .3s;
        }
        &:valid ~ .floating-input__label {
            color: var(--Gray);
        }

        &:focus ~ .floating-input__label{
            font-size: 1rem;
            top: -100%;
            background-color: var(--SmoothBlack);
            
            left: 0.75rem;
            z-index: 3;
            color: var(--White);
            // transition: .3s;
        }

        
    }

    .floating-input{
        width: 100%;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        
        &:focus-visible + .floating-input__label{
            background-color: red;
        }

        &__label{
            padding: 0 1rem;
            transition: .3s;
            z-index: 1;
            width: fit-content;
            color: var(--DarkGray);
            position: absolute;
            inset: 0;
            box-sizing: border-box;
            height: min-content;
            margin: auto 1rem;
        }

        &__option{
            display: flex;
            background-color: var(--SmoothBlack);
        }
        
    }


</style>