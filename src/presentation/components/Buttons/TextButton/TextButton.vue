<script setup lang="ts">
    interface ITextButtonProps {
        label:string;
        radius?:string;
        height:string;
        width:string;
        color?:string;
    }

    const props = defineProps<ITextButtonProps>()
</script>
<template>
    <button 
        class="text-button"
        :style='{ 
            borderRadius: props.radius, 
            width: props.width,
            height: props.height,
            backgroundColor: props.color
        }'

    >{{ props.label  }}</button>
</template>
<style scoped>
    .text-button {
        display: flex;
        align-items: center;
        justify-content: center;
        
        border: 1px solid;
        font-family: var(--Inter) !important;
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-18);
    }
</style>