<script setup lang="ts">
import FAQCard from './FAQCard/FAQCard.vue';
import { closeFAQOpenState, faqs, openFAQOpenState } from './faqs';

interface IFAQProps {
    bg2?:boolean;
}
const props = defineProps<IFAQProps>();
</script>
<template>
    <section class="section-frame" :class="props.bg2 ?'bg2' :''">
        <div class="faq-section">
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
        </div>
    </section>
</template>
<style scoped>
    .section-frame {
        display: flow-root;
    }
    .faq-section {
        min-height: 1168px;
        padding: 45px 24px 100px;
        background: white;

        >.section-title {
            font-size: 24px;
            font-weight: var(--font-weight-semibold);
            width: 80%;
            line-height: 48px;
        }
    }
    .faq-list {
        margin-top: 51px;
    }

    @media screen and (min-width: 1024px) {
        .section-frame {
            background: linear-gradient(180deg, #05969B 0%, #5DA988 100%);
            padding: 5%;
            height: 100vh;
        }
        .section-frame.bg2 {
            background: var(--orange-accent-100);
        }
        .faq-section {
            margin: 0;
            min-height: unset;
            height: 100%;
            border-radius: 12px;

            >.section-title {
                margin-inline: auto;
                font-size: 32px;
                font-weight: var(--font-weight-semibold);
                width: max-content;
                line-height: 48px;
            }
        }
        .faq-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 200px;
            row-gap: 50px;
            padding-inline: 100px;
            justify-content: start;
        }
    }
</style>