<template>
    <article class="big-headline">
        <h1 class="headline headline_big">
            <slot name="headline"></slot>
        </h1>
        <p class="text">
            <slot name="subtitle"></slot>
        </p>
    </article>
    
</template>

<script>
    export default {
        name: 'BigHeadline',
    };
</script>

<style scoped>
    .big-headline{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    @media screen and (max-width: 425px) {
        .big-headline{
            display: flex;
            flex-direction: column;
            text-align:left;
            gap: 1rem;
        }
    }
</style>