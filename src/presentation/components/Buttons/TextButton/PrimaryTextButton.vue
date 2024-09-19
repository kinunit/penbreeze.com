<script setup lang="ts">
import TextButton from './TextButton.vue';

interface IPrimaryTextButtonProps {
    label:string;
    transparent?:boolean;
    width:string;
}
const props = defineProps<IPrimaryTextButtonProps>()
</script>
<template>
    <TextButton
        :color="props.transparent ?'transparent' :'initial'"
        :label="props.label"
        height="60px"
        :width="props.width"
        class="primary-text-color"
    />
</template>
<style scoped>
    .primary-text-color {
        background-color: var(--primary-teal-color) !important;
        border-radius: 100px;
        color: var(--primary-white-color);
    }
</style>