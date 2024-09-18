<script setup lang="ts">
    interface IIProcessCard {
        title:string;
        desc:string;
    }
    const props = defineProps<IIProcessCard>()
</script>
<template>
    <div class="process-card">
        <slot name="process-asset"></slot>

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