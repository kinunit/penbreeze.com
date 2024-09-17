<script setup lang="ts">
    import IconButton from './IconButton.vue';
    import IconArrowDiagonal from "src/assets/icons/arrow-diagonal.svg";

    interface ICircleIconButtonProps {
        label:string;
    }

    const props = defineProps<ICircleIconButtonProps>()

</script>
<template>
    <IconButton
        :label="props.label"
        radius="50%"
        height="150px"
        width="150px"
        class="circle-icon-button"
    >
        <template v-slot:prefix-icon>
            <IconArrowDiagonal class="icon-arrow" />
        </template>
    </IconButton>
</template>
<style scoped>
    .circle-icon-button {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        
        border: 0;
        background-color: var(--primary-teal-color);
        color: var(--primary-white-color);
        font-size: 18px;
    }

    .icon-arrow {
        width: 26px;
        height: 28px;
    }
</style>