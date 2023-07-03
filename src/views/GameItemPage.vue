<template>
    <NavbarItem></NavbarItem>
    <div class="page-container padding-top padding-top_small">
        <section class="container  container_main page-block">
            <div class="game">
                <div class="game__game-info">
                    <GameSlider :slidesInfo="this.game.images"></GameSlider>
                    <div class="game__tags-container">
                        <p class="game__tag headline headline_small">{{ this.game.genres[0].attributes.name }}</p>
                        <p class="game__tag headline headline_small">{{ this.game.teams[0].attributes.name }}</p>
                        <p class="game__tag headline headline_small">{{ this.game.attributes.releaseDate }}</p>
                        <div class="game__tag-platforms platforms">
                            <svg v-if="this.game.platforms.some(o => o.id == 1)" class="platforms__item platforms__item_windows" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.92088 9.42088V17.5H17V9.42088H8.92088ZM0 9.42088V17.5H8.08082V9.42088H0ZM8.92088 0.5V8.58082H17V0.5H8.92088ZM0 0.5V8.58082H8.08082V0.5H0Z" fill="#A5A5A5"/>
                            </svg>
                            <svg v-if="this.game.platforms.some(o => o.id == 2)" class="platforms__item platforms__item_apple" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0401 4.18501C15.791 3.31146 16.2477 2.16664 16.2477 0.91532C16.2477 0.775092 16.2424 0.636397 16.2309 0.5L16.2324 0.517624C14.8769 0.655553 13.693 1.29846 12.8555 2.25247L12.8501 2.2586C12.0861 3.10686 11.6187 4.23481 11.6187 5.47234C11.6187 5.59265 11.6233 5.71295 11.6317 5.83096L11.631 5.81487C11.644 5.81487 11.6593 5.81487 11.6754 5.81487C13.0348 5.81487 14.247 5.18193 15.0324 4.1942L15.0401 4.18501ZM11.8057 7.12136C10.8976 7.12136 9.49305 6.08919 8.01338 6.12521C5.97433 6.18115 4.21343 7.31906 3.27781 8.98341L3.26326 9.01176C1.2357 12.5305 2.74066 17.7281 4.71764 20.5886C5.68774 21.9809 6.83179 23.5472 8.34901 23.4989C9.80416 23.4368 10.3505 22.5541 12.1168 22.5541C13.87 22.5541 14.3673 23.4989 15.9091 23.4621C17.4768 23.4376 18.4715 22.0453 19.4293 20.6392C20.0791 19.699 20.6201 18.6155 20.9956 17.4576L21.0201 17.3695C19.1964 16.5779 17.9427 14.7956 17.9366 12.7198C17.9542 10.8761 18.9358 9.26539 20.4009 8.36656L20.4232 8.35353C19.473 7.01945 17.955 6.1436 16.2294 6.07847H16.2194C14.3045 5.92904 12.7014 7.12136 11.8057 7.12136Z" fill="#A5A5A5"/>
                            </svg>
                            <svg v-if="this.game.platforms.some(o => o.id == 3)" class="platforms__item platforms__item_xbox" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 3.16345C8.30586 2.48935 6.903 2.01178 5.40589 1.81585L5.3477 1.80985C5.30343 1.80686 5.25156 1.80506 5.1997 1.80506C4.81198 1.80506 4.4483 1.90093 4.13269 2.06931L4.14344 2.06391C5.63422 1.08482 7.48109 0.5 9.4728 0.5C9.47786 0.5 9.48292 0.5 9.48798 0.5H9.5C9.50316 0.5 9.50696 0.5 9.51138 0.5C11.5082 0.5 13.3607 1.08482 14.8882 2.08309L14.8566 2.06332C14.5542 1.90033 14.1918 1.80386 13.8054 1.80386C13.7516 1.80386 13.6985 1.80566 13.646 1.80925L13.6529 1.80866C12.0976 2.00999 10.6948 2.48575 9.44814 3.18502L9.5 3.15806V3.16345ZM2.89301 3.06937C2.86708 3.07776 2.84431 3.08855 2.82344 3.10173L2.8247 3.10113C1.08029 4.73276 0 6.99833 0 9.503C0 11.6505 0.794408 13.6225 2.12074 15.1696L2.10682 15.1529C0.997437 13.1989 4.94038 7.68981 6.92007 5.47037C4.68738 3.36059 3.58242 3.03642 3.11565 3.03642C3.10932 3.03642 3.10236 3.03582 3.09541 3.03582C3.02267 3.03582 2.9531 3.0484 2.88921 3.07177L2.89301 3.07057V3.06937ZM12.0825 5.47037C14.0615 7.69101 18.007 13.2049 16.8925 15.1541C18.205 13.6237 19 11.6517 19 9.5036C19 6.99834 17.9191 4.73276 16.1747 3.10173L16.1734 3.10053C16.1551 3.08795 16.1336 3.07716 16.1102 3.06937L16.1083 3.06877C16.045 3.0472 15.9716 3.03522 15.8957 3.03522C15.8926 3.03522 15.8888 3.03522 15.8856 3.03522C15.4169 3.03522 14.3145 3.36118 12.0825 5.47037ZM3.2472 16.2746C4.90875 17.6563 7.10097 18.5 9.50127 18.5C11.9016 18.5 14.0938 17.6569 15.7661 16.2662L15.7553 16.2752C17.241 14.8413 12.3386 9.74328 9.5 7.71258C6.66455 9.74387 1.75832 14.8407 3.2472 16.2746Z" fill="#A5A5A5"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="game__panels panels">
                    <div class="panels__left-side">
                        <div class="game__main-info-container panels__sticky-element">
                            <h1 class="game__name headline">
                                {{ this.game.attributes.name }}
                            </h1>
                            <div class="game__buy-container">
                                <BtnItem class="game__buy-btn buy-btn">
                                    <p class="buy-btn__price headline headline_small">{{ this.game.attributes.price }} р</p>
                                    <svg class="buy-btn__icon" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.48354 0.483643C4.48448 0.483643 0.38916 4.33824 0 9.23684L5.1006 11.3457C5.53278 11.0501 6.05489 10.8769 6.61658 10.8769C6.66692 10.8769 6.71704 10.8791 6.76674 10.8815L9.03501 7.59372C9.03501 7.57801 9.03501 7.56274 9.03501 7.54725C9.03501 5.56832 10.6448 3.95833 12.6239 3.95833C14.6029 3.95833 16.2126 5.56832 16.2126 7.54725C16.2126 9.52618 14.6029 11.1364 12.6239 11.1364C12.5966 11.1364 12.5695 11.1364 12.5424 11.1342L9.30736 13.4425C9.30951 13.4845 9.31058 13.5273 9.31058 13.5699C9.31058 15.0555 8.10223 16.2637 6.6168 16.2637C5.31293 16.2637 4.22268 15.333 3.97571 14.1006L0.32785 12.5934C1.45725 16.5879 5.12706 19.5163 9.48354 19.5163C14.7395 19.5163 19 15.2556 19 10.0003C19 4.74418 14.7392 0.483643 9.48354 0.483643Z" />
                                        <path d="M5.96391 14.9232L4.79492 14.4403C5.00209 14.8716 5.36048 15.2328 5.83634 15.4311C6.86506 15.8597 8.05104 15.3716 8.47979 14.342C8.68738 13.8442 8.68867 13.2945 8.4828 12.7954C8.27736 12.2961 7.8897 11.9068 7.39126 11.699C6.89669 11.4931 6.36684 11.5006 5.90131 11.6764L7.1088 12.1757C7.86754 12.4919 8.22637 13.3632 7.91014 14.1219C7.59455 14.8809 6.72265 15.2397 5.96391 14.9232Z"/>
                                        <path d="M15.0151 7.54727C15.0151 6.22877 13.9425 5.15594 12.6237 5.15594C11.3052 5.15594 10.2324 6.22877 10.2324 7.54727C10.2324 8.86598 11.3052 9.93837 12.6237 9.93837C13.9425 9.93837 15.0151 8.86576 15.0151 7.54727ZM10.8313 7.54318C10.8313 6.55103 11.6357 5.74689 12.6278 5.74689C13.62 5.74689 14.4243 6.55103 14.4243 7.54318C14.4243 8.53533 13.62 9.33947 12.6278 9.33947C11.6357 9.33947 10.8313 8.53512 10.8313 7.54318Z"/>
                                    </svg>
                                </BtnItem>
                                <div class="game__rating">
                                    <h3 class="game__rating-number headline headline_small">
                                        {{ this.game.attributes.rating }}
                                    </h3>
                                    <span class="game__rating-star material-symbols-rounded">
                                        star
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="panels__left-side-end"></div>
                    </div>
                    <div class="panels__right-side">
                        <span class="game__description">
                            <p v-html="this.game.attributes.description" class="game__text text"></p>
                        </span>
                        <div class="comments-block">
                            <h2 class="comments-block__header headline headline_medium">Комментарии</h2>
                            <p v-if="!this.user" class="text text_small">Чтобы оставлять комментарии необходимо зарегистрироваться</p>
                            <CommentForm v-else  @submitForm="store" :placeholder="this.commentPlaceholder"></CommentForm>
                            <CommentList v-if="this.game.comments.length != 0" :comments="this.game.comments"></CommentList>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    import GameSlider from '@/components/GameSlider.vue';
    import BtnItem from '@/components/BtnItem.vue';
    import CommentList from '@/components/CommentList.vue';
    import CommentForm from '@/components/CommentForm.vue';
    import axios from 'axios';
    import apiCheck from '../apiCheck.js';
    import qs from 'qs';
    
    export default{
        name: 'GameItemPage',
        components:{
            NavbarItem,
            FooterItem,
            GameSlider,
            BtnItem,
            CommentList,
            CommentForm
        },
        data(){
            return{
                game: {
                    id: null,
                    attributes:{
                        name: '',
                        price: null,
                        description: '',
                        releaseDate: '',
                        rating: null,
                        link: ''
                    },
                    genres:[
                        {
                            attributes:{
                                name: ''
                            }
                        }
                    ],
                    teams:[
                        {
                            id: null,
                            attributes:{
                                name: ''
                            }
                        }
                    ],
                    platforms:[
                        {
                            id: null,
                            attributes:{
                                name: ''
                            }
                        }
                    ],
                    images:[
                        {
                            id: null,
                            attributes:{
                                imgURL: ''
                            }
                        }
                    ],
                    comments:[
                        {
                            id: null,
                            attributes:{
                                text: null
                            },
                            user:{
                                attributes:{
                                    name: ''
                                },
                            }
                        }
                    ]
                },
                user: null,

                
                commentPlaceholder:"Введите текст комментария",                
                
                
            }
        },
        methods: {
            async getGame(){
                try {
                    const response = await axios.get(
                        `http://127.0.0.1:8000/api/games/${this.$route.params.id}`
                    );
                    this.game = response.data.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async getUser(){
                apiCheck.post("http://127.0.0.1:8000/api/auth/me")
                .then((response) => {
                    this.user = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
			async store(dataFromForm){
                axios.request({
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:8000/api/comments/',
                    headers: { 
                        'Accept': 'application/json', 
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`, 
                    },
                    data : qs.stringify({
                        'game_id': `${this.game.id}`,
                        'text': `${dataFromForm.text}`,
                    }),
                })
                .then(() => {
                    this.$router.go(0);
                })
                .catch((error) => {
                    console.log(error);
                    alert('Ошибка!');
                });

			}
        },
        created() {
            this.getGame();
            this.getUser();
        },
    }
</script>

<style scoped lang="scss">
    .game{
        display: flex;
        flex-direction: column;
        gap: 4.375rem;

        &__game-info{
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }

        &__tags-container{
            padding-top: 0.6rem;
            display: flex;
            align-items: center;
            gap: 3.125rem;
            color: var(--Gray);
            overflow: auto;
        }

        &__tag-platforms{
            margin-top: -0.6rem;
        }

        &__tag{
            color: var(--Gray);
            white-space: nowrap;
        }

        &__buy-container{
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        &__rating{
            display: flex;
            align-items: flex-end;
            gap: 0.5rem;
            color: white;
        }

        &__description{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        &__text{
            line-height: 150%;
        }

    }

    .panels{
        display: flex;
        gap: 15%;

        &__right-side{
            padding-top: 10rem;
            display: flex;
            flex-direction: column;
            gap: 10rem;
        }

        &__sticky-element{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: sticky;
            top: 6.25rem;
        }
    }

    .buy-btn{
        display: flex;
        gap: 1rem;
        white-space:nowrap;
        &__price, &__icon{
            color: var(--SmoothBlack);
            fill: var(--SmoothBlack);
        }
    }

    .platforms{
        display: flex;
        gap: 0.8rem;
        align-items: flex-end;
    }


    .material-symbols-rounded {
        font-variation-settings:
        'FILL' 1,
        'wght' 300,
        'GRAD' 0,
        'opsz' 48
    }

    .comments-block{
        display: flex;
        flex-direction: column;
        gap: 3.125rem;
    }


    @media screen and (max-width: 1024px) {
        .panels{
            display: flex;
            flex-direction: column;
            gap: 4rem;

            &__right-side{
                padding: 0;
            }

            &__sticky-element{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                position:static;
            }
        }
    }
</style>