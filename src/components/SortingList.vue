<template>
    <form class="sorting" @submit.prevent="this.submitForm">
        
        
        <div class="sorting__fields">
            <h2 class="headline headline_medium">Всего результатов: {{ this.gamesCount }}</h2>
            <SelectSorting v-model="this.formData.sortBy" :options="this.sortBy" :label="'Сортировать по'"></SelectSorting>
            <MinMaxSorting v-model:minValue="this.formData.priceMin" v-model:maxValue="this.formData.priceMax"  :label="this.price.label" :min="this.price.min" :max="this.price.max"></MinMaxSorting>
            <InputSorting v-model="this.formData.year" :placeholder="this.year.placeholder" :type="this.year.type" :min="this.year.min" :max="this.year.max" :label="this.year.label"></InputSorting>
            <SelectSorting v-model="this.formData.genre_id" :options="this.genres" :label="'Жанры'"></SelectSorting>
            <MinMaxSorting v-model:minValue="this.formData.ratingMin" v-model:maxValue="this.formData.ratingMax" :label="this.rating.label" :min="this.rating.min" :max="this.rating.max"></MinMaxSorting>
            <SelectSorting v-model="this.formData.platform_id" :options="this.platforms" :label="'Платформы'"></SelectSorting>
            <SelectSorting v-model="this.formData.team_id" :options="this.teams" :label="'Разработчики'"></SelectSorting>
            <MinMaxSorting v-model:minValue="this.formData.remainMin" v-model:maxValue="this.formData.remainMax" :label="this.remain.label" :min="this.remain.min" :max="this.remain.max"></MinMaxSorting>
            <BtnItem class="sorting__btn" type="submit" >Сортировать</BtnItem>
        </div>
        
        
    </form>
</template>

<script>
    import InputSorting from '@/components/InputSorting.vue';
    import MinMaxSorting from '@/components/MinMaxSorting.vue';
    import SelectSorting from '@/components/SelectSorting.vue';
    import BtnItem from './BtnItem.vue';
    export default {
        name: 'SortingList',
        components:{
        InputSorting,
        MinMaxSorting,
        SelectSorting,
        BtnItem
        },
        props:{
            gamesCount:{ 
                type: Number,
                default: 0
            }, 
            genres:[],
            platforms:[],
            teams: []
        },
        data(){
            
            return{
                formData:{
                    sortBy: null,
                    year: null,

                    genre_id: null,
                    platform_id: null,
                    team_id: null,

                    ratingMin: null,
                    ratingMax: null,

                    remainMin: null,
                    remainMax: null,

                    priceMin: null,
                    priceMax: null,
                },
                queryString: '',
                year:{
                    type: "number",
                    min: 2000,
                    max: 2099,
                    label:"Год",
                    input: '',
                },
                rating:{
                    label:"Рейтинг",
                    min: 0.0,
                    max: 5.0,
                    minInput: null,
                    maxInput: null,
                },
                
                price:{
                    label:"Цена",
                    min: 0,
                    max: 99999999,
                    minInput: null,
                    maxInput: null,
                },

                remain:{
                    label:"Остаток",
                    min: 0,
                    max: 99999999,
                    minInput: null,
                    maxInput: null,
                },

                // platforms:[
                //     {
                //         value: null,
                //         label: "",
                //     },
                //     {
                //         value: 0,
                //         label: "Windows",
                //     },
                //     {
                //         value: 1,
                //         label: "MacOS",
                //     },
                //     {
                //         value: 2,
                //         label: "Xbox",
                //     },
                // ],
                // genres:[
                //     {
                //         value: null,
                //         label: "",
                //     },
                // ],
                sortBy:[
                    {
                        id: "new",
                        attributes:{
                            name: "Сначала новое",
                        }
                    },
                    {
                        id: "old",
                        attributes:{
                            name: "Сначала старое",
                        }
                        
                    },
                    
                ],
                // teams:[
                //     {
                //         value: null,
                //         label: "",
                //     },
                // ]
            }
        },
        methods: {
            async submitForm() {
                this.queryString = `?`;
                for (const [key, value] of Object.entries(this.formData)) {
                    // console.log(`${key}: ${value}`);
                    if(value){
                        this.queryString+=`${key}=${value}&`
                    }
                }
                this.queryString = this.queryString.slice(0, -1);
                console.log(this.queryString);
                this.$emit('submitForm', this.queryString)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sorting{
        display: flex;
        flex-direction: column;
        gap: 8rem;
        width: 100%;

        &__fields{
            display: flex;
            flex-direction: column;
            gap: 4rem;
        }

    }

    
</style>