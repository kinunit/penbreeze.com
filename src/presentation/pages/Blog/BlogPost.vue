<script setup lang="ts">
import FAQ from 'src/presentation/components/FAQ/FAQ.vue';
import Footer from 'src/presentation/components/Footer/Footer.vue';
import { useRoute } from 'vue-router';
import PostDetails from './components/PostDetails.vue';

const route = useRoute();
</script>
<script lang="ts">
    export default {
        name:"BlogPost"
    }
</script>
<template>
    <section class="">
        <Suspense>
            <PostDetails :id="route.params.catchAll.toString()" />
        </Suspense>
    </section>
    <FAQ bg2 />
    <Footer />
</template>
<style scoped>
</style>