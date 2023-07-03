<template>
    <NavbarItem></NavbarItem>
    <div class="page-container padding-top">
        <div class="container container_main">
            <div class="pannels">
                <section v-if="this.isAdmin" class="container container_main page-block pannels__left">
                    <div class="controls">
                        <div class="controls__add">
                            <BtnItem :link="'/games/create/'">Новая игра</BtnItem>
                        </div>
                        <div class="controls__sort">
                            <SortingList :gamesCount=this.games.length :genres="this.genres" :platforms="this.platforms" :teams="this.teams" @submitForm="getSortedGames"></SortingList>
                        </div>
                    </div>
                </section>
                <section class="container container_main page-block pannels__right">
                    <GameCardList :gameCardsInfo="this.games" :isAdmin = "this.isAdmin"></GameCardList>
                </section>
            </div>
            
        </div>
        
    </div>
    
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    import GameCardList from '@/components/GameCardList.vue';
    import SortingList from '@/components/SortingList.vue';
    import BtnItem from '@/components/BtnItem.vue';
    import axios from 'axios';
    import apiCheck from '../apiCheck.js';
    export default{
        name: 'GamesPage',
        components:{
            NavbarItem,
            FooterItem,
            GameCardList,
            SortingList,
            BtnItem
        },
        data(){
            return{
                isAdmin: null,
                games: [],
                teams: [],
                platforms:[],
                genres:
                {
                    type: Array,
                    required: true,
                    
                    id: {
                        type: String,
                        default: ''
                    },
                    attributes: {
                        name: {
                            type: String,
                            default: ''
                        }
                    },
                },
                
                
            }
        },
        methods: {
            async getGames(){
                try {
                    const response = await axios.get(
                    "http://127.0.0.1:8000/api/games"
                    );
                    this.games = response.data.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async getTeams(){
                try {
                    const response = await axios.get(
                    "http://127.0.0.1:8000/api/teams"
                    );
                    this.teams = response.data.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async getPlatforms(){
                try {
                    const response = await axios.get(
                    "http://127.0.0.1:8000/api/platforms"
                    );
                    this.platforms = response.data.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async getGenres(){
                try {
                    const response = await axios.get(
                    "http://127.0.0.1:8000/api/genres"
                    );
                    this.genres = response.data.data;
                } catch (error) {
                    console.log(error);
                }
            },

            async getSortedGames(query){
                try {
                    const response = await axios.get(
                        `http://127.0.0.1:8000/api/games${query}`
                    );
                    this.games = response.data.data;
                } catch (error) {
                    console.log(error);
                }
            },
            getAdmin(){
                apiCheck.post("http://127.0.0.1:8000/api/auth/me")
                .then((response) => {
                    this.isAdmin = response.data.attributes.isAdmin;
                    console.log(response.data.attributes.isAdmin);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        created() {
            this.getGames();
            this.getGenres(),
            this.getTeams(),
            this.getPlatforms(),
            this.getAdmin()
        },
    }
</script>

<style lang="scss" scoped>
    .pannels{
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        
        &__left{
            display: flex;
            flex-direction: column;
            max-width: 20rem;
            width: 20%;
            min-width: 15rem;
        }
      
    }

    .controls{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }

    @media screen and (max-width: 768px) {
        .pannels{
            flex-direction: column;
        }
    }
</style>