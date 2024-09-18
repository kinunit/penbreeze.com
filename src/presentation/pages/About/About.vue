<script setup lang="ts">
    import AboutUsMainImage from "src/assets/images/about-us-main.svg";
import Testimony from "./components/Testimony/Testimony.vue";
import Footer from "src/presentation/components/Footer/Footer.vue";
</script>
<template>
    <section class="entry section-frame">
        <div class="heading4 about-heading">
            <div>CREATIVITY</div>
            <div>EXPERIENCE</div>
            <div>PASSION</div>
        </div>
    
        <AboutUsMainImage class="about-us-image" />

        <div class="body large-body-text">
            We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services.
        </div>
    </section>

    <section class="origin section-frame">
        <div class="heading4 heading">Our Origin</div>
        
        <div class="origin-body-list">
            <div class="body large-body-text">
                <div class="title medium-body-text">WHO WE ARE</div>
                <div class="desc medium-body-text">Pen Breeze is a dynamic and innovative creative digital team dedicated to crafting online experiences that resonate with both brands and their audiences. With a relentless pursuit of the question — “what message should be conveyed through each marketing channel and what is the most effective way to convey this message?” — at Pen Breeze, we channel our creativity and expertise into every project we undertake.</div>
            </div>
        
            <div class="body large-body-text">
                <div class="title medium-body-text">OUR MISSION</div>
                <div class="desc medium-body-text">To collaborate closely with clients in order to build websites and marketing campaigns that not only capture the attention of visitors but also compel them to take precise, intended actions. Whether it’s guiding visitors towards a purchase, encouraging further exploration, event registration, survey participation, or any other website goal, Pen Breeze knows how to seamlessly merge design aesthetics with strategic marketing insights.</div>
            </div>
        </div>
    </section>

    <section class="brag section-frame">
        <div class="intro">
            <div class="heading4 heading">Not to brag.. but we do have the best team</div>
            <div class="body medium-body-text">
                Our team consists of lively and passionate creatives that want to see your business thrive – just as much as you do. They love what they do and this reflects in their work – you’ll see this for yourself when you work with us! 
            </div>
        </div>
        
    </section>

    <Testimony />

    <Footer />
</template>
<style scoped>
    .section-frame {
        display: flow-root;
    }
    
    .entry {
        min-height: 100vh;

        >.about-heading {
            color: var(--primary-teal-color);
            margin-inline: auto;
            text-align: center;
            margin-top: 130px;
        }
        >.body {
            font-size: var(--font-size-30);
            color: var(--black-accent-100);
            text-align: center;
        }
    }

    .origin {
        min-height: 1424px;
        padding-inline: 24px;

        >.heading {
            margin-inline: auto;
            text-align: center;
            margin-top: 70px;
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-40);
        }
    }
    .origin-body-list {
        display: flex;
        flex-direction: column;
        gap: 100px;
        margin-top: 52px;

        >.body {
            font-size: var(--font-size-30);
            color: var(--black-accent-100);
        }
        >.body .title {
            color: var(--primary-teal-color);
            font-weight: var(--font-weight-semibold);
        }
        >.body .desc {
            font-weight: var(--font-weight-medium);
            margin-top: 32px;
        }
    }

    .brag {
        height: 1526px; 
        padding-inline: 24px;

        .intro {
            height: 546px;
        }

        >.intro .heading {
            margin-top: 70px;
            width: 80%;
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-40);
        }
        >.intro .body {
            width: 90%;
            font-weight: var(--font-weight-medium);
            color: var(--black-accent-100);
            margin-top: 24px;
        }
    }
</style>