<script setup lang="ts">

    interface IPostAuthorProps {
        authorId:number;
    }

    const props = defineProps<IPostAuthorProps>();
    // const authorDetails:AuthorView = await authorService.getAuthor(props.authorId);
    // console.log(authorDetails)
</script>
<script lang="ts">
    export default {
        name:"PostAuthor"
    }
</script>
<template>

</template>
<script></script>