<script setup lang="ts">
import FAQ from 'src/presentation/components/FAQ/FAQ.vue';
import Footer from 'src/presentation/components/Footer/Footer.vue';
import Posts from './components/PostsList.vue';
import Header from 'src/presentation/components/Header/Header.vue';
import IconBlob from "src/assets/illustrations/blob2.svg";
</script>
<template>
    <Header
        navItemColor="#303739"
        logoColor="var(--primary-teal-color)"
        callToActionColor="var(--primary-white-color)"
    />
    <IconBlob class="global-blob" />
    <section class="section-frame">
        <div class="heading4 entry-heading">Blog posts</div>
        <div class="posts-frame">
            <Suspense>
                <Posts />
            </Suspense>
        </div>
    </section>
    <FAQ bg2 />
</template>
<style scoped>
    .section-frame {
        display: flow-root;
    }
    .global-blob {
        position: absolute;
        right: -150px;
        top: -140px;
        fill: var(--primary-teal-color);
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

    @media screen and (min-width: 800px) {
        .global-blob {
            right: -30px;
            top: -130px;
        }
    }
</style>