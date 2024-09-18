<script setup lang="ts">
import CircleIconButton from 'src/presentation/components/Buttons/IconButtons/CircleIconButton.vue';
import ServicesSection from '../LandingPage/components/Services/ServicesSection.vue';
import ProcessCard from './components/ProcessCard.vue';
import { processes } from './services';
import Footer from 'src/presentation/components/Footer/Footer.vue';
import FAQ from 'src/presentation/components/FAQ/FAQ.vue';

</script>   
<template>
    <section class="intro-section section-frame">
        <div class="heading4 intro-heading">More leads, more sales & more money.</div>
        <div class="body medium-body-text">We're a team of passionate and creative digital marketing professionals dedicated to helping businesses like yours grow and succeed in the digital world - We help you WIN!</div>
        <div class="image"></div>
    </section>

    <section class="services-process section-frame">
        <div class="process">
            <div class="heading4 process-heading">Did you know having a strong online presence is important for your business?</div>
            <div class="body medium-body-text">We're a team of passionate and creative digital marketing professionals dedicated to helping businesses like yours grow and succeed in the digital world - We help you WIN!</div>

            <div class="process-list">
                <ProcessCard 
                    v-for="(process, index) in processes" 
                    :key="index"
                    :title="process.title"
                    :desc="process.desc"
                >
                    <template v-slot:process-asset>
                        <div class="process-asset-image"></div>
                    </template>
                </ProcessCard>
            </div>
        </div>
        
        <ServicesSection showAll  />
        
        <div class="see-our-work">
            <div class="body heading4">At PenBreeze Marketing, we offer a wide range of digital marketing solutions that can be customized to suit the unique needs of your brand.</div>
            <CircleIconButton label="see our work" class="see-our-work-btn" />
        </div>
    </section>

    <section class="perspective section-frame">
        <div class="body heading5">
            Just like everyone has a unique thumbprint, so does every brand. 
            <br />That's why we don't believe in a one-size-fits-all approach. 
            Instead, we take the time to <span class="yellow">understand your business</span>, <span class="pink">goals</span>, and <span class="red">target audience</span> to create a strategy that works for you.
        </div>
    </section>

    <FAQ />

    <Footer />
</template>
<style scoped>
    .section-frame {
        display: flow-root;
    }

    .intro-section {
        height: 1142px;
        background-color: var(--primary-teal-color);
        padding-inline: 20px;
        
        >.intro-heading {
            color: var(--orange-accent-100);
            margin-top: 130px;
        }
        >.body {
            margin-top: 215px;
            color: var(--orange-accent-100);
            line-height: 150%;
            font-weight: var(--font-weight-500);
        }
        >.image {
            height: 340px;
            width: 100%;
            background-color: var(--orange-accent-100);
            border-radius: 200px 200px 30px 30px;
            margin-top: 54px;
        }
    }

    .services-process {
        height: 6324px;
    }

    .process {
        padding-inline: 20px;

        >.process-heading {
            margin-top: 100px;
            font-weight: var(--font-weight-medium);
            color: var(--primary-teal-color);
            font-size: var(--font-size-40);
            width: 90%;
        }
        >.body {
            margin-top: 42px;
            width: 88%;
        }
    }
    .process-list {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        gap: 100px;
    }
    .process-asset-image {
        height: 90px;
        width: 90px;
        background-color: grey;
    }

    .see-our-work {
        >.body {
            margin-inline: auto;
            font-size: var(--font-size-40);
            font-weight: var(--font-weight-500);
            text-align: center;
            width: 78%;
            color: var(--primary-teal-color);
        }
        >.see-our-work-btn {
            margin-inline: auto;
            margin-top: 50px;
        }
    }

    .perspective {
        height: 819px;
        background-color: var(--black-accent-900);
        display: flex;
        align-items: center;
        justify-self: center;

        >.body {
            color: var(--primary-white-color);
            width: 80%;
            font-weight: var(--font-weight-500);
            text-align: center;
            margin-inline: auto;
        }
    }
    .see-our-work {
        margin-top: 100px;
    }
</style>