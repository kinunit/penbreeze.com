<script setup lang="ts">
    interface IIconButtonProps {
        label:string;
        radius?:string;
        height:string;
        width:string;
    }

    const props = defineProps<IIconButtonProps>()
</script>
<template>
    <button 
        class="icon-button"
        :style='{ 
            borderRadius: props.radius, 
            width: props.width,
            height: props.height
        }'
    >
        <!-- <div class="icon prefix" v-show="props.prefixIcon">{{ props.prefixIcon  }}</div> -->
        <slot name="prefix-icon"></slot>
        <div class="button-label">{{ props.label  }}</div>
        <slot name="suffix-icon"></slot>
    </button>
</template>
<style scoped>
    .icon-button {
        display: flex;
        font-family: var(--Inter) !important;
    }
    .icon {
        height: 26px;
        width: 26px;
    }
    .button-label {
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-18);
    }
</style>