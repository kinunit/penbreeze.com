<script setup lang="ts">
import { reactive } from 'vue';
import { postService } from './posts';
import type { PostView } from 'src/application/post/PostView';
import PostCard from './PostCard.vue';


// const categories = reactive([
//     {
//         label: "All",
//         isSelected: true
//     },
//     {
//         label: "Email marketing",
//         isSelected: false
//     },
//     {
//         label: "Web design & support",
//         isSelected: false
//     },
//     {
//         label: "Social media Management",
//         isSelected: false
//     },
//     {
//         label: "Consultations",
//         isSelected: false
//     }
// ])

const posts:PostView[] = await postService.getPosts()
</script>
<script>
</script>
<template>
    <!-- <div class="categories">
        <div 
            class="category"
            v-for="(category, index) in categories"
            :key="index"
            :class="category.isSelected ?'selected' :''"
            @click="()=> {
                categories.forEach(category => category.isSelected = false)
                categories[index].isSelected = true;
            }"

        > {{ category.label }} </div>
    </div> -->

    <div class="posts">
        <PostCard
            v-for="post in posts"
            :id="post.id"
            :title="post.title"
            :path="post.path"
            :excerpt="post.excerpt"
            :author="post.author"
            :date="post.createdAt"
        />
    </div>
</template>
<style scoped>
    .categories {
        width: 90%;
        margin-inline: auto;

        display: flex;
        flex-direction: column;
        gap: 16px;

        >.category {
            border: 1px solid var(--primary-teal-color);
            width: max-content;
            padding: 10px 20px;
            border-radius: 67px;
        }
        >.category.selected {
            background-color: var(--primary-teal-color);
            color: white;
        }
    }
    .posts {
        margin-top: 50px;
        padding: 55px 15px;
        background: var(--primary-teal-color);
    }
</style>