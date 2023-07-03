<template>
    <article class="game-card" >
        
            <div :style="bgImage" class="game-card__img-block">
                <ControlsBtns v-if="this.isAdmin" :table="'games'" :id="this.id"></ControlsBtns>
            </div>
        <router-link :to="{ name: 'game', params: { id: this.id }}" class="game-card__link game-card__container">
            <div class="game-card__content">
                <div class="game-card__main-info">
                    <h3 class="headline headline_small game-card__headline">
                        {{this.name}}
                    </h3>
                    <div class="game-card__price">
                        <p class="game-card__price-number headline headline_small">
                            {{this.price}}
                        </p>
                        <p class="game-card__price-currency headline headline_small">
                            &#8203; р
                        </p>
                    </div>
                    
                </div>
                <div class="game-card__rating">
                    <h3 class="game-card__rating-number headline headline_small">
                        {{this.rating}}
                    </h3>
                    <span class="game-card__rating-star material-symbols-rounded">
                        star
                    </span>
                </div>
                
            </div>
        </router-link>
    </article>
</template>

<script>
    import ControlsBtns from './ControlsBtns.vue';
    export default{
        name: 'GameCard',
        components:{
            ControlsBtns
        },
        props:{
            id:{
                type: String,
            },
            name:{
                type: String,
            },
            price:{
                type: Number,
            },
            rating:{
                type: Number,
            },
            imgPath:{
                type: String,
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
        }
    }
</script>

<style scoped lang="scss">
    .game-card{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        &__link{
            text-decoration: none;
        }

        &__container{
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }

        &__rating{
            display: flex;
            margin-bottom: auto;
            align-items: center;
            align-content: center;
            justify-content: center;
            gap: 0.2rem;
            color: white;
        }

        

        &__price {
            display: flex;
            color: var(--Gray);
        }

        &__price-number, &__price-currency{
            color: inherit;
        }

        &__main-info{
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        &__headline{
            max-width: 12.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .material-symbols-rounded {
        font-variation-settings:
        'FILL' 1,
        'wght' 300,
        'GRAD' 0,
        'opsz' 48
    }

    .game-card__img-block{
        display: flex;
        align-items: flex-start;
        height: 12rem;
        aspect-ratio: 16/9;
        background-position: center;
        background-size: cover;
        border-radius: 0.5rem;
        padding: 1rem;
        box-sizing: border-box;
    }

    .game-card__content{
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 0.25rem;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    .game-card__email{
        display: flex;
        padding: 0;
        margin: 0;
        border: none;
        background-color: transparent;
        color: var(--CoolMint);
        cursor: pointer;
        font-weight: 700;
    }

</style>