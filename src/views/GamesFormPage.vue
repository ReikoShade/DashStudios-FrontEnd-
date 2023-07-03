<template>
    <NavbarItem></NavbarItem>
    <div class="page-container container container_main padding-top padding-top_big games-forms">
        <div class="games-forms__forms">
            <h2 class="games-forms__headline headline">
                Добавление новой игры
            </h2>
            <GamesForm @submitForm="store"></GamesForm>
        </div>
    </div>
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    import GamesForm from '@/components/GamesForm.vue';
    import axios from 'axios';
    export default{
        name: 'GamesFormPage',
        components:{
            NavbarItem,
            FooterItem,
            GamesForm
        },
        data(){
            return{
                
            }
        },
        methods:{
			store(dataFromForm){
                const formData = new FormData();
                formData.append('name', dataFromForm.name);
                formData.append('price', dataFromForm.price);
                formData.append('description', dataFromForm.description);
                formData.append('remain', dataFromForm.remain);
                formData.append('releaseDate', dataFromForm.releaseDate);
                formData.append('rating', dataFromForm.rating);
                formData.append('link', dataFromForm.link);
                formData.append('genres[0]', dataFromForm.genres[0]);
                formData.append('platforms[0]', dataFromForm.platforms[0]);
                
                formData.append('teams[0]', dataFromForm.teams[0]); 
               
                // formData.append('images[]', dataFromForm.images);
                // console.log(dataFromForm.images.files[0]);
                for(var i=0;i<dataFromForm.images.length;i++){
                    formData.append("images[]", dataFromForm.images[i], dataFromForm.images[i].name);
                    console.log("images[]", dataFromForm.images[i], dataFromForm.images[i].name);
                }


                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:8000/api/games',
                    headers: { 
                        'Accept': 'application/json', 
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`, 
                        
                    },
                    data : formData
                };

                axios.request(config)
                    .then(() => {
                        this.$router.push({name: 'games'});

                    })
                    .catch((error) => {
                    console.log(error);
                    });
			}
		}
    }
</script>

<style lang="scss" scoped>
    .games-forms{
        display: flex;
        flex-direction: column;
        gap: 8rem;
        width: clamp(18.75rem, 50%, 40rem);
        margin: 0 auto;

        &__forms{
            display: flex;
            flex-direction: column;
            gap: 4rem;
        }
        
      
    }
</style>