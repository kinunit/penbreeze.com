<script setup lang="ts">
import IconCancel from "src/assets/icons/x-close.svg";

const props = defineProps<{
    close:()=> void;
}>();

</script>
<template>
    <div class="mobile-side-bar">
        <div class="header">
            <router-link to="/" class="logo" @click="props.close">PenBreeze</router-link>
            <IconCancel class="cancel" @click="props.close" />
        </div>
        <div class="nav">
            <router-link to="services" class="nav-item" @click="props.close">Services</router-link>
            <router-link to="about" class="nav-item" @click="props.close">About Us</router-link>
            <router-link to="blog" class="nav-item" @click="props.close">Blog</router-link>
            <router-link to="contact-us" class="nav-item call-to-action" @click="props.close">Let's Talk</router-link>
        </div>
    </div>
</template>
<style scoped>
.mobile-side-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--primary-white-color);
    z-index: 1000;

    display: flex;
    flex-direction: column;
}
.header {
    width: 100%;
    height: 90px;
    padding-inline: 45px;
    border-bottom: 1px solid #EAEAEA;
    display: flex;
    align-items: center;

    >.logo {
        font-size: var(--font-size-32);
        font-weight: var(--font-weight-medium);
        color: var(--primary-teal-color);
        cursor: pointer;
    }
    >.cancel {
        margin-left: auto;
        cursor: pointer;
        fill: var(--primary-teal-color) !important;
    }
    >.cancel path {
        stroke: var(--primary-teal-color) !important;
    }
}
.nav {
    >.nav-item {
        font-weight: var(--font-weight-semibold);
        color: #303739;
        padding-inline: 45px;
        height: 75px;
        
        display: flex;
        align-items: center;
        font-size: var(--font-size-20);
    }
    >.call-to-action {
        color: var(--primary-teal-color);
    }
}
</style>