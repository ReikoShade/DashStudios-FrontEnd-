<template>
    <form class="games-form"  @submit.prevent="this.submitForm">
        
        <FloatingInput v-model="this.formData.name" :placeholder="'Название'"></FloatingInput>
        <FloatingInput v-model="this.formData.link" :placeholder="'Ссылка'" type="url"></FloatingInput>
        <FloatingInput v-model="this.formData.price" :placeholder="'Цена'" type="number" step="any"></FloatingInput>
        <FloatingInput v-model="this.formData.description" :placeholder="'Описание'" type="textarea"></FloatingInput>
        <FloatingInput v-model="this.formData.rating" :placeholder="'Рейтинг'" type="number" step="any"></FloatingInput>
        <FloatingInput v-model="this.formData.genres[0]" type="select" :options="this.genres" :placeholder="'Жанры'"></FloatingInput>
        <FloatingInput v-model="this.formData.platforms[0]" type="select" :multiple="true" :options="this.platforms" :placeholder="'Платформы'"></FloatingInput>
        <FloatingInput v-model="this.formData.teams[0]" type="select" :options="this.teams"  :placeholder="'Разработчики'"></FloatingInput>
        <FloatingInput v-model="this.formData.remain" :placeholder="'Остаток'" type="number"></FloatingInput>
        <FloatingInput v-model="this.formData.releaseDate" :placeholder="'Дата релиза'" type="date" :value= this.currentDate()></FloatingInput>
        <FloatingInput @onFileSelected="storeFiles" v-model="this.formData.images" :placeholder="'Скриншоты'" type="file"></FloatingInput>
        <BtnItem class="games-form__btn" type="submit" >Добавить игру</BtnItem>
    </form>
</template>

<script>
    import FloatingInput from '@/components/FloatingInput.vue';
    import BtnItem from '@/components/BtnItem.vue';
    import axios from 'axios';
    import apiCheck from '../apiCheck.js';
    export default {
        name: 'GamesForm',
        components:{
            FloatingInput,
            BtnItem,
        },
        data(){
            return{
                formData:{
                    name: '',
                    price: null,
                    description: null,
                    remain: null,
                    releaseDate: '',
                    rating: null,
                    link: null,
                    genres: [],
                    platforms: [],
                    teams: [],
                    images: []
                },
                genres:[],
                platforms:[],
                teams: [],
                dropzone: null
                
            }
        },
        methods: {
            async submitForm() {
                this.$emit('submitForm', this.formData)
            },
            storeFiles(files){
                this.formData.images = Array.from(files);
                console.log(this.formData.images);
            },
            currentDate() {
                return new Date().toJSON().slice(0, 10);
            }, 
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
            this.getGenres(),
            this.getTeams(),
            this.getPlatforms(),
            this.getAdmin()
        },
    }
</script>

<style lang="scss" scoped>
    .games-form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        &__btns{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-end;
        }


        &__sign-up{
            display: flex;
            gap: 1.5rem;
            margin-left: auto;
        }

        &__sign-up-router-link{
            text-decoration: none;
        }

        &__sign-up-link{
            color: var(--CoolMint);
            font-weight: 600;
        }
    }

    
</style>