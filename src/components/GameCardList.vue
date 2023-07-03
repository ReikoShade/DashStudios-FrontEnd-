<template>
    <div class="game-cards">
        <GameCard :id=game.id :name="game.attributes.name" :price=game.attributes.price :rating=game.attributes.rating :imgPath="game.images[0].attributes.imgURL"  :isAdmin = "this.isAdmin"
        v-for="game in gameCardsInfo" :key="game.id"></GameCard>
    </div>
</template>
<script>
    import GameCard from '@/components/GameCard.vue';
    export default {
        name: 'GameCardList',
        components: {
            GameCard,
        },
        
        props:{
            gameCardsInfo:{
              type: Array,
              required: true,
            },
            isAdmin:{
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    .game-cards{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        flex-wrap: wrap;
        padding-bottom: 2rem;
    }
  

</style>