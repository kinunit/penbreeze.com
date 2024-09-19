<script setup lang="ts">
import type { Component } from 'vue';

    export interface IIProcessCard {
        title:string;
        desc:string;
        asset:Component;
    }
    const props = defineProps<IIProcessCard>()
</script>
<template>
    <div class="process-card">
         <props.asset class="icon" />

        <div class="dets">
            <div class="title heading5">{{ props.title }}</div>
            <div class="desc medium-body-text">{{ props.desc }}</div>
        </div>
    </div>
</template>
<style scoped>
    .process-card {
        height: 258px;
        margin-inline: auto;
        width: 85%;

        display: flex;
        flex-direction: column;
        align-items: center;
        
        text-align: center;

        >.icon {
            height: 84px;
            width: 84px;
        }
        >.dets {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        >.dets .desc {
            color: var(--black-accent-100);
            width: 90%;
            margin-inline: auto;
        }
    }

</style>