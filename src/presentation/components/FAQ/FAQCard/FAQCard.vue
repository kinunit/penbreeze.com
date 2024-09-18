<script setup lang="ts">
    import IconCancel from "src/assets/icons/cancel.svg";
    import IconPlus from "src/assets/icons/plus.svg";

    interface IIFAQCard {
        question:string;
        answer:string;
        isOpen:boolean;
        closeAction:()=> void;
        openAction:()=> void;
    }
    const props = defineProps<IIFAQCard>();
</script>
<template>
    <div class="question-and-answer">
        <div class="top">
            <div class="question heading6" :class="props.isOpen && 'open'">{{ props.question }}</div>
            <IconCancel class="open-close-icon" v-show="props.isOpen" @click="()=> props.closeAction()" />
            <IconPlus class="open-close-icon" v-show="!props.isOpen" @click="()=> props.openAction()" />
        </div>
        <div class="answer small-body-text" v-show="props.isOpen">{{ props.answer }}</div>
    </div>
</template>
<style scoped>
    .question-and-answer {
        min-height: 115px;
        border-bottom: 2px solid #00000017;
        
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        padding: 5px 0;
    }
    .top {
        display: flex;
        justify-content: space-between;
        padding-inline-end: 24px;
        margin-top: auto;


        >.question {
            line-height: 32.4px;
            width: 80%;
            font-weight: var(--font-weight-medium);
        }
        >.question.open {
            color: #FBBC05;
        }
        >.open-close-icon {
            height: 18px;
            width: 18px;
            margin-top: 7px;
        }
    }
    .answer {
        line-height: 32.4px;
        font-weight: var(--font-weight-medium);
        transition: 1s;
    }
</style>