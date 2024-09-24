<script setup lang="ts">
import type { Component } from 'vue';

    interface IServiceCardProps {
        index:number;
        title:string;
        description:string;
        asset:Component;
    }
    const props = defineProps<IServiceCardProps>()
</script>
<script lang="ts">
    export interface IService {
        asset:Component;
        title:string;
        description:string;
    }

    export default {
        name:"ServiceCard"
    }
</script>
<template> 
    <div class="service-card">
        <div class="service-heading heading6">
            <div class="service-index">{{ props.index }}</div>
            <div class="service-title">{{ props.title }}</div>
        </div>
        <props.asset class="ill" />
        <div class="desc normal-body-text">{{ props.description }}</div>
    </div>
</template>
<style scoped>
    .service-card {
        width: 100%;
        height: 525px;
        border-radius: 12px;
        background-color: var(--teal-faded-accent-100);
        padding: 10px 24px;
        
        display: flex;
        flex-direction: column;
        gap: 8.5px;
    }

    .service-heading {
        display: flex;
        align-items: center;
        gap: 16px;

        line-height: 130%;
        letter-spacing: 0.4px;
        font-weight: var(--font-weight-semibold);
    }
    .service-index {
        width: 24px;
        height: 26px;
        padding: 10px;
        background: var(--primary-teal-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        color: var(--primary-white-color);
    }

    .ill {
        width: 100%;
        height: 230px;
    }

    .desc {
        width: 90%;
        height: 125px;
        font-weight: var(--font-weight-normal);
        line-height: 140%;
    }

    @media screen and (min-width: 1024px) {
        .services-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>