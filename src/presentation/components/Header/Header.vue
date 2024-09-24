<script setup lang="ts">
import { reactive } from 'vue';
import SideBar from '../SideBar/SideBar.vue';
import IconMenu from "src/assets/icons/menu.svg";

interface IHeaderProps {
    navItemColor?:string;
    logoColor?:string;
    callToActionColor?:string;
}
const props = defineProps<IHeaderProps>()
const mobileSideBarVisibility = reactive({ state: false });
</script>
<template>
    <div class="header">
        <nav class="nav">
            <router-link to="services" class="nav-item" :style="{ color: props.navItemColor }">Services</router-link>
            <router-link to="about" class="nav-item" :style="{ color: props.navItemColor }">About us</router-link>
            <router-link to="blog"  class="nav-item" :style="{ color: props.navItemColor }">Blog</router-link>
        </nav>
    
        <router-link to="/" class="logo" :style="{ color: props.logoColor }">PenBreeze</router-link>
    
        <router-link 
            to="contact-us" 
            class="call-to-action" 
            :style="{ color: props.callToActionColor }"
        >Let's talk</router-link>

        <IconMenu 
            class="menu"
            :style="{ stroke: props.callToActionColor }"
            @click="()=> mobileSideBarVisibility.state = true"
        />
    </div>
    <SideBar
        v-show="mobileSideBarVisibility.state" 
        :close="()=> mobileSideBarVisibility.state = false"
    />
</template>
<style scoped>
    .header {
        display: flex;
        align-items: center;
        padding-inline: 22px;
        justify-content: space-between;
        height: 70px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }

    .nav {
        display: none;
    }

    .logo {
        margin-inline: auto;
        color: inherit;
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-18);
    }

    .call-to-action {
        display: none;
    }
    .menu {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
    
    .mobile-side-bar {
        display: flex;
    }

    @media screen and (min-width: 900px) {
        .header {
            padding-inline: 100px;
        }

        .nav {
            display: flex;
            gap: 50px;
            align-items: center;

            color: #303739;
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-18);

        }
        .nav-item {
            font-size: 18px;
        }
        .logo {
            margin-right: 20%;
            font-size: var(--font-size-32);
            font-weight: var(--font-weight-normal);
        }
        .call-to-action {
            display: block;
            font-weight: var(--font-weight-medium);
            border-bottom: 2px solid;
            padding: 8px 0;
        }
        .menu,
        .mobile-side-bar {
            display: none;
        }
    }

    @media screen and (min-width: 1024px) {
        .logo {
            margin-left: -15%;
            margin-right: 0;
        }
    }
</style>