<template>
    <button class="btn headline"
    :class="addBtnModifiers"
    @click="this.$router.push(this.link)">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'BtnItem',
        props: {
            link:{
                type: String,
                default: ''
            },
            isSecondary: {
                type: Boolean,
                default: false
            },
            isWhite: {
                type: Boolean,
                default: false
            },
            isDisabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            addBtnModifiers() {
                return {
                    btn_secondary: this.isSecondary,
                    btn_white: this.isWhite,
                    btn_disabled: this.isDisabled
                };
            }
        }
    };
</script>

<style scoped lang="scss">
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.875em 2em;
        border-radius: 0.625em;
        border: none;
        background-color: var(--CoolMint);
        color: var(--Black);
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;

        &_secondary{
            color: var(--White);
            background-color: var(--Black);
        }
        &_white{
            color: var(--SmoothBlack);
            fill: var(--SmoothBlack);
            background-color: var(--White);
        }
        &_disabled{
            color: var(--Black);
            fill: var(--White);
            background-color: var(--Gray);
        }
    }
</style>