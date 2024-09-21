<script setup lang="ts">
import FAQ from 'src/presentation/components/FAQ/FAQ.vue';
import Footer from 'src/presentation/components/Footer/Footer.vue';
import Posts from './Posts/Posts.vue';

</script>
<template>
    <section class="section-frame">
        <div class="heading4 entry-heading">Blog posts</div>
        <div class="posts-frame">
            <Suspense>
                <Posts />
            </Suspense>
        </div>
    </section>
    <FAQ bg2 />
    <Footer />
</template>
<style scoped>
    .section-frame {
        display: flow-root;
    }
    .entry-heading {
        width: max-content;
        margin-top: 160px;
        margin-inline: auto;
        color: var(--primary-teal-color);
    }
    .posts-frame {
        margin-top: 80px !important;
    }
</style>