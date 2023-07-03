<template>
    <div class="controls">
        <!-- <button class="control control_edit" v-if="this.isRedactable">
            <span  class="material-symbols-rounded control__icon">
                edit
            </span>
        </button> -->
        <button @click="deleteItem" class="control control_delete">
            <span class="material-symbols-rounded control__icon">
                delete
            </span>
        </button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name: 'ControlsBtns',
        props:{
            isRedactable:{
                type: Boolean,
                default: true
            },
            table:{
                type: String
            },
            id:{
                type: String
            } 
        },
        data(){
            return{
                isAdmin: null,
            }
        },
        methods:{
            async deleteItem(){
                axios.request({
                    method: 'delete',
                    maxBodyLength: Infinity,
                    url: `http://127.0.0.1:8000/api/${this.table}/${this.id}`,
                    headers: { 
                        'Accept': 'application/json', 
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`, 
                    },
                })
                .then(() => {
                    this.$router.go(0);
                })
                .catch((error) => {
                    console.log(error);
                    alert('Ошибка!');
                });
            },
            // async store(dataFromForm){
            //     axios.request({
            //         method: 'post',
            //         maxBodyLength: Infinity,
            //         url: 'http://127.0.0.1:8000/api/comments/',
            //         headers: { 
            //             'Accept': 'application/json', 
            //             'Content-Type': 'application/x-www-form-urlencoded',
            //             'Authorization': `Bearer ${localStorage.getItem('access_token')}`, 
            //         },
            //         data : qs.stringify({
            //             'game_id': `${this.game.id}`,
            //             'text': `${dataFromForm.text}`,
            //         }),
            //     })
            //     .then(() => {
            //         this.$router.go(0);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         alert('Ошибка!');
            //     });

			// }
        }
    }
</script>

<style scoped lang="scss">


    .controls{
        display: flex;
        gap: 0.8rem;
        
    }

    .control{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: var(--Black);
        padding: 0.4em;
        border-radius: 0.4em;
        
        &_edit{
            &:hover{
                background-color: var(--CoolMint);
            }
        }

        &_delete{
            &:hover{
                background-color: var(--Red);
            }
        }

        &__icon{
            font-size: 1.25rem;
        }
    }

</style>