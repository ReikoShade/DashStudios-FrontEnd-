<template>
    <article class="comment">
        <div class="comment__content-container">
            <div class="comment__body-container">
                <h3 class="comment__username headline headline_small">
                    {{this.user.attributes.name}}
                </h3>
                <p class="comment__text text text_small">
                    {{this.body.attributes.text}}
                    
                </p>
            </div>
        </div>
        <div class="comment__controls">
            <ControlsBtns :isRedactable="false" :table="'comments'" :id="this.body.id"></ControlsBtns>
        </div>
    </article>
</template>

<script>
    import ControlsBtns from './ControlsBtns.vue';
    export default{
        name: 'CommentItem',
        components:{
            ControlsBtns
        },
        props:{
            body:{
                id: null,
                attributes: {
                    text: null
                }

            },
            user:{
                id: null,
                attributes: {
                    name: ''
                }
            },
            
        },
    }
</script>

<style scoped lang="scss">
    .comment{
        display: flex;
        gap: 1rem;
        width: 100%;
        justify-content: space-between;
        &__body-container{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        &__content-container{
            display: flex;
            gap: 1rem;
        }

        &__avatar{
            height: 3.125rem;
            aspect-ratio: 1/1;
            border-radius: 100%;
            background-position: center;
            background-size: cover;
        }

        &__username{
            font-size: 1rem;
            color: var(--Gray);
            font-weight: 500;
        }

        &__text{
            line-height: 150%;
            color: var(--White);
        }
    }

</style>