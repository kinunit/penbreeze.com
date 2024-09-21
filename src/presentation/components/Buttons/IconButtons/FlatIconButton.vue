<script setup lang="ts">
    import IconButton from './IconButton.vue';
    import IconArrowDiagonal from "src/assets/icons/arrow-diagonal.svg";

    interface IFlatIconButtonProps {
        label:string;
        clickAction:()=> void;
    }

    const props = defineProps<IFlatIconButtonProps>()

</script>
<template>
    <IconButton
        :label="props.label"
        height="50px"
        width="204px"
        class="flat-icon-button"
        :clickAction="props.clickAction"
    >
        <template v-slot:suffix-icon>
            <div class="icon-arrow-cirle">
                <IconArrowDiagonal class="icon-arrow" />
            </div>
        </template>
    </IconButton>
</template>
<style scoped>
    .flat-icon-button {
        border:0;
        align-items: center;
        gap: 1rem;
    }
    .icon-arrow-cirle {
        width: 50px;
        height: 50px;
        background-color: var(--primary-teal-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
</style>