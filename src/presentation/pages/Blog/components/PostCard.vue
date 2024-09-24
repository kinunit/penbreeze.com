<script setup lang="ts">
import FlatIconButton from 'src/presentation/components/Buttons/IconButtons/FlatIconButton.vue';
import { removeHTML } from 'src/presentation/utils/removeHTML';
import { useRouter } from 'vue-router';

interface IPostCardProps {
    id:number;
    title:string;
    // asset:string;
    path:string;
    author:number;
    date:Date;
    excerpt:string;
}
const props = defineProps<IPostCardProps>();

const router = useRouter();

function navigate (path:string) {
    router.push(path);
}
</script>
<template>
    <div class="post-card">
        <div class="title medium-body-text">{{ props.title }}</div>
        <img src="" class="image" />
        <div class="meta">
            <div class="author">{{ props.author }}</div>
            <div class="date">{{ props.date }}</div>
        </div>
        <div class="excerpt">{{ removeHTML(props.excerpt) }}</div>

        <FlatIconButton 
            class="read-more-btn"
            label="Read more" 
            :clickAction="()=> navigate(props.id.toString())"
        />
    </div>
</template>
<style scoped>
    .post-card {
        height: 540px;
        background: white;
        border-radius: 12px;
        padding: 10px 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .title {
        font-family: var(--Bricolage-Grotesque);
        font-weight: var(--font-weight-semibold);
        line-height: 130%;
        letter-spacing: 0.4px;
    }
    .image {
        height: 200px;
        background: lightgrey;
    }
    .meta {
        display: flex;
        gap: 14px;
        align-items: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%; 
        color: #444;
    }
    .excerpt {
        color: #444;
        height: 130px;
        font-size: var(--font-size-18);
        font-weight: 500;
        line-height: 140%;

        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
    }
    .read-more-btn {
        color: var(--primary-teal-color);
    }
</style>