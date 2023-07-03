<template>
    <article class="team-card">
        <div :style="bgImage" class="team-card__img-block">
            <ControlsBtns v-if="this.isAdmin" :table="'teams'" :id="this.id"></ControlsBtns>
        </div>
        <div class="team-card__content">
            <h3 class="headline headline_medium">
                {{this.name}}
            </h3>
            <button class="team-card__email text text_small" @click="copyText(this.email)">
                {{this.email}}
            </button>
            <p class="team-card__description text text_small">
                {{this.description}}
            </p>
        </div>
    </article>
</template>

<script>
    import ControlsBtns from './ControlsBtns.vue';
    export default{
        name: 'TeamCard',
        components:{
            ControlsBtns
        },
        props:{
            id:{
                required: true,
            },
            name:{
                type: String,
                required: true,
            },
            description:{
                type: String,
                required: true,
            },
            email:{
                type: String,
                required: true,
            },
            imgPath:{
                type: String,
                required: true,
            },
            isAdmin:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                bgImage: {
                    backgroundImage: `url(${this.imgPath})`
                }
            }
        },
        methods:{
            async copyText(text) {
                try {
                    await navigator.clipboard.writeText(text);
                    alert('Почта скопирована!');
                } catch($e) {
                    alert('Ошибка');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .team-card{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        &__img-block{
            display: flex;
            align-items: flex-start;
            height: 14rem;
            aspect-ratio: 1/1;
            background-position: center;
            background-size: cover;
            border-radius: var(--borderRadius);
            padding: 1rem;
            box-sizing: border-box;
        }

        &__content{
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            max-width: 14rem;
        }

        &__email{
            display: flex;
            padding: 0;
            margin: 0;
            border: none;
            background-color: transparent;
            color: var(--CoolMint);
            cursor: pointer;
            font-weight: 700;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

</style>