<template>
    <NavbarItem></NavbarItem>
    <div class="page-container container container_main padding-top padding-top_big teams-forms">
        <div class="teams-forms__forms">
            <h2 class="teams-forms__headline headline">
                Добавление новой команды
            </h2>
            <TeamsForm @submitForm="store"></TeamsForm>
        </div>
    </div>
    <FooterItem></FooterItem>
</template>

<script>
    import NavbarItem from '@/components/NavbarItem.vue';
    import FooterItem from '@/components/FooterItem.vue';
    import TeamsForm from '@/components/TeamsForm.vue';
    import axios from 'axios';
    export default{
        name: 'TeamsFormPage',
        components:{
            NavbarItem,
            FooterItem,
            TeamsForm
        },
        data(){
            return{
            }
        },
        methods:{
            store(dataFromForm){
                const formData = new FormData();
                formData.append('name', dataFromForm.name);
                formData.append('description', dataFromForm.description);
                formData.append('email', dataFromForm.email);
                formData.append("image", dataFromForm.image, dataFromForm.image.name);

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:8000/api/teams',
                    headers: { 
                        'Accept': 'application/json', 
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`, 
                        
                    },
                    data : formData
                };

                axios.request(config)
                    .then(() => {
                        this.$router.push({name: 'teams'});

                    })
                    .catch((error) => {
                    console.log(error);
                    });
			}
        }
    }
</script>

<style lang="scss" scoped>
    .teams-forms{
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

    // @media screen and (max-width: 768px) {
    //     .pannels{
    //         flex-direction: column;
    //     }
    // }
</style>