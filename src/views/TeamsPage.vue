<template>
    <NavbarItem></NavbarItem>
    <div class="page-container padding-top padding-top_big ">
        <section class="container container_main  page-block">
            <div class="company-card">
                <div class="company-card__content">
                    <h2 class="company-card__header headline">
                        Как мы работаем?
                    </h2>
                    <p class="company-card__text text">
                        Все наши разработчики делятся на небольшие команды занимающиеся своим проектом. Так, мы можем проявить лучшие качества наших сотрудников и найти место и команду где им будет интересно и комфортно
                    </p>
                </div>
            </div>
        </section>
        <section class="container container_main  page-block">
            <BtnItem v-if="this.isAdmin" class="btn-left" :link="'/teams/create/'">Новая команда</BtnItem>
            <TeamCardList :teamCardsInfo="this.teams" :isAdmin="this.isAdmin"></TeamCardList>
        </section>
        
    </div>
    
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    import TeamCardList from '@/components/TeamCardList.vue';
    import BtnItem from '@/components/BtnItem.vue';
    import axios from 'axios';
    import apiCheck from '../apiCheck.js';

    export default {
        name: 'TeamsPage',
        components:{
            NavbarItem,
            FooterItem,
            TeamCardList,
            BtnItem
        },
        data(){
            return{
                isAdmin: null,
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
                teamCardsInfo:[
                    {
                        id: 0,
                        name: 'Arduno Labs',
                        description: 'Шутеры',
                        email: 'arduno@dash.com',
                        imgPath: 'team1.png'
                    },
                    {
                        id: 1,
                        name: 'Wolf Eye',
                        description: 'Инди-игры',
                        email: 'wolf@dash.com',
                        imgPath: 'team1.png'
                    },
                    {
                        id: 2,
                        name: 'Sea Wave',
                        description: 'Симуляторы',
                        email: 'wave@dash.com',
                        imgPath: 'team1.png'
                    },
                    {
                        id: 3,
                        name: 'CodoRunners',
                        description: 'Мультиплеер',
                        email: 'codo@dash.com',
                        imgPath: 'team1.png'
                    },
                    {
                        id: 4,
                        name: 'DashSecurity',
                        description: 'Инф безопасность',
                        email: 'security@dash.com',
                        imgPath: 'team1.png'
                    },
                    {
                        id: 5,
                        name: 'Sleep Deprived',
                        description: 'Визуальные новеллы',
                        email: 'nosleep@dash.com',
                        imgPath: 'team1.png'
                    },
                    {
                        id: 6,
                        name: 'Rocky Team',
                        description: 'Ритм игры',
                        email: 'rocky@dash.com',
                        imgPath: 'team1.png'
                    },
                    {
                        id: 7,
                        name: 'Cosmic',
                        description: 'Экшн',
                        email: 'cosmic@dash.com',
                        imgPath: 'team1.png'
                    },
                    {
                        id: 9,
                        name: 'DashGameDesign',
                        description: 'Гейм дизайн',
                        email: 'gamedesign@dash.com',
                        imgPath: 'team1.png'
                    },
                    
                ]
            }
        },
        methods: {
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
            this.getTeams();
            this.getAdmin()
        },
    }
</script>

<style lang="scss" scoped>
    .company-card{
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 40rem;
        box-sizing: border-box;
        border-radius: 0.625rem;
        gap: 1.875rem;

        &__content{
            // max-width: 60%;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            position: relative;
            z-index: 2;
        }
    }
    .btn-left{
        margin-right: auto;
    }

    
</style>