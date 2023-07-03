<template>
    <NavbarItem></NavbarItem>
    <div class="page-container padding-top padding-top_big">
        <section class="container container_main  page-block">
            <BigHeadline>
                <template v-slot:headline>
                    Игры, способные вдохновлять
                </template>
                <template v-slot:subtitle>
                    Передавать эмоции, дух и атмосферу через пиксели - наша работа
                </template>
            </BigHeadline>
            <InfoSlider :slidesInfo="this.games"></InfoSlider>
        </section>
        <section class="container container_main  page-block">
            <BigHeadline>
            <template v-slot:headline>
                Наша команда
            </template>
            <template v-slot:subtitle>
                Приручают драконов с помощью Unity
            </template>
            </BigHeadline>
            <TeamCardList :teamCardsInfo="this.teams" :isSmallList="true"></TeamCardList>
        </section>
    
    </div>
    
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    import InfoSlider from '@/components/InfoSlider.vue';
    import BigHeadline from '@/components/BigHeadline.vue';
    import TeamCardList from '@/components/TeamCardList.vue';
    import axios from 'axios';
    import apiCheck from '../apiCheck.js';
    export default{
        name: 'HomePage',
        components:{
            NavbarItem,
            FooterItem,
            InfoSlider,
            BigHeadline,
            TeamCardList
        },
        data(){
            return{
                
                teams:[
                    {
                        id: 0,
                        attributes:{
                            name: '',
                            description: '',
                            email: '',
                            imgURL: ''
                        }
                    }
                ],
                games:[
                ]
            }
        },
         methods: {
            async getTeams(){
                try {
                    const response = await axios.get(
                    "http://127.0.0.1:8000/api/teams"
                    );
                    this.teams = response.data.data.slice(1, 6);
                    
                } catch (error) {
                    console.log(error);
                }
            },
            async getGames(){
                try {
                    const response = await axios.get(
                    "http://127.0.0.1:8000/api/games"
                    );
                    this.games = response.data.data.slice(1, 6);
                } catch (error) {
                    console.log(error);
                }
            },
            async getAdmin(){
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
            this.getTeams();
            
            this.getAdmin()
        },
    }
</script>

<style>
</style>