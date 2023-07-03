<template>
    <div class="team-cards" :class="addModifiers">
        <TeamCard :id=team.id :name="team.attributes.name" :description="team.attributes.description" :email="team.attributes.email" :imgPath="team.attributes.imgURL" v-for="team in this.teamCardsInfo" :isAdmin="this.isAdmin" :key="team.id" ></TeamCard>
    </div>
</template>
<script>
    import TeamCard from './TeamCard.vue';
    export default {
        name: 'TeamCardList',
        components: {
            TeamCard,
        },
        
        props:{
            teamCardsInfo:{
              type: Array,
              required: true,
            },
            isAdmin: {
                type: Boolean,
                default: false
            },
            isSmallList: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            addModifiers() {
                return {
                    "team-cards_small-list": this.isSmallList,
                };
            }
        }
    };
</script>

<style scoped lang="scss">
    .team-cards{
        display: flex;
        width: 100%;
        justify-content:flex-start;
        flex-wrap: wrap;
        gap: 4rem;
        padding-bottom: 2rem;

        &_small-list{
            display: flex;
            justify-content:center;
            width: 100%;
            overflow: auto;
        }
    }
  

</style>