<script setup lang="ts">
import { postService } from './posts';

const props = defineProps<{id:string}>()

const postDetails = await postService.getPost(props.id)
console.log(postDetails)
</script>
<script lang="ts">
    export default {
        name:"Post"
    }
</script>
<template>
    <section class="">
        <div class="title"></div>
    </section>
</template>
<style scoped>
    .title  {

    }
</style>