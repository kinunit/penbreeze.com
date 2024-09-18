<script setup lang="ts">
import FAQCard from './FAQCard/FAQCard.vue';
import { closeFAQOpenState, faqs, openFAQOpenState } from './faqs';


</script>
<template>
    <section class="faq-section">
        <div class="heading6 section-title">FREQUENTLY ASKED QUESTIONS</div>
        <div class="faq-list">
            <FAQCard 
                v-for="(faq, index) in faqs"
                :key="index"
                :question="faq.question"
                :answer="faq.answer"
                :isOpen="faq.isOpen"
                :closeAction="()=> closeFAQOpenState(index)"
                :openAction="()=> openFAQOpenState(index)"
            />
        </div>
    </section>
</template>
<style scoped>
    .faq-section {
        min-height: 1168px;
        padding-inline: 24px;
        padding-bottom: 100px;

        >.section-title {
            margin-top: 45px;
            font-size: 24px;
            font-weight: var(--font-weight-semibold);
            width: 80%;
            line-height: 48px;
        }
    }
    .faq-list {
        margin-top: 51px;
    }
</style>