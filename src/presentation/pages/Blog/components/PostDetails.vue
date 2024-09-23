<script setup lang="ts">
import formatDate from 'src/presentation/utils/formatDate';
import { postService } from './posts';

const props = defineProps<{id:string}>()

const postDetails = await postService.getPost(props.id)
</script>
<script lang="ts">
    export default {
        name:"Post"
    }
</script>
<template>
    <section class="section-frame post-section">
        <div class="title heading3">{{ postDetails.title }}</div>
        <div class="meta medium-body-text">
            <!-- <Suspense>
                <PostAuthor :authorId="postDetails.author"/>
            </Suspense> -->
            <!-- <div class="author">{{ postDetails.author }}</div> -->
            <div class="date">{{ formatDate(postDetails.updatedAt) }}</div>
            <div class="date"> 3 mins read</div>
        </div>
        <div class="content">
            <img src="" class="image" />
            <div 
                class="body large-body-text" 
                id="post-content" 
                v-html="postDetails.content"
            />
        </div>
    </section>
</template>
<style scoped>
    .section_frame {
        display: flow-root;
    }
    .post-section {
        padding-inline: 230px;
    }
    .title  {
        margin-top: 200px;
        line-height: 130%;
        letter-spacing: 1.4px;
        font-weight: var(--font-weight-semibold);
    }

    .meta {
        display: flex;
        gap: 14px;
        margin-left: 17px;
        font-weight: var(--font-weight-normal);
        color: var(--black-accent-100);
        line-height: 140%;
        font-size: 20px;
    }

    .content {
        margin: 100px 0;
        line-height: 150%;
        
        >.body {
            font-size: 30px;
            font-weight: var(--font-weight-normal);
        }
    }
</style>