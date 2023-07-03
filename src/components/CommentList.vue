<template>
    <div class="game-cards">
        <CommentItem :body="comment" :user="comment.user" v-for="comment in comments" :key="comment.id"></CommentItem>
        <p v-if="comments.length == 0" class="text game-cards__empty-text">Комментариев нет</p>
    </div>
</template>
<script>
    import CommentItem from '@/components/CommentItem.vue';
    export default {
        name: 'CommentList',
        components: {
            CommentItem,
        },
        
        props:{
            comments:{
              type: Array,
              required: true,
            }
        }
    };
</script>

<style scoped>
    .game-cards{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 4rem;
    }
  

</style>