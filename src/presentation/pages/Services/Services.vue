<script setup lang="ts">
import CircleIconButton from 'src/presentation/components/Buttons/IconButtons/CircleIconButton.vue';
import ProcessCard from './components/ProcessCard.vue';
import FAQ from 'src/presentation/components/FAQ/FAQ.vue';
import ServicesMainImage from "src/assets/images/services-main.png";
import IllStaircase from "src/assets/illustrations/staircase.svg";
import IllTrophy from "src/assets/illustrations/trophy.svg";
import IllStar from "src/assets/illustrations/star.svg";
import IllSmallStars from "src/assets/illustrations/small-stars.svg";
import Header from "src/presentation/components/Header/Header.vue";
import IconBlob from "src/assets/illustrations/blob2.svg";
import { useRouter } from 'vue-router';
import ServicesSection from './components/ServicesSection.vue';
import { processes } from './services';

const router = useRouter();
</script>
<template>
    <Header
        navItemColor="var(--primary-white-color)"
        logoColor="var(--primary-white-color)"
        callToActionColor="var(--primary-teal-color)"
    />
    <IconBlob class="global-blob" />
    <section class="intro-section section-frame">
        <div class="heading4 intro-heading">More leads, more sales & more money.</div>
        <div class="body medium-body-text">We're a team of passionate and creative digital marketing professionals dedicated to helping businesses like yours grow and succeed in the digital world - We help you WIN!</div>
        <img :src=ServicesMainImage class="image-1" />
    </section>

    <section class="services-process section-frame">
        <div class="process">
            <div class="heading">
                <div class="heading4 process-heading">Did you know having a strong online presence is important for your business?</div>
                <div class="body medium-body-text">We're a team of passionate and creative digital marketing professionals dedicated to helping businesses like yours grow and succeed in the digital world - We help you WIN!</div>
                <div class="ill-number-1">
                    <IllTrophy class="ill-trophy" />
                    <IllStaircase class="ill-staircase" />
                </div>
            </div>

            <div class="process-list">
                <ProcessCard
                    v-for="(process, index) in processes" 
                    :key="index"
                    :title="process.title"
                    :desc="process.desc"
                    :asset="process.asset"
                />
            </div>
        </div>
        
        <ServicesSection showAll  />
        
        <div class="see-our-work">
            <div class="body heading4">At PenBreeze Marketing, we offer a wide range of digital marketing solutions that can be customized to suit the unique needs of your brand.</div>
            <CircleIconButton 
                label="Let's collaborate" 
                class="see-our-work-btn"
                :clickAction="()=> router.push({ path: '/contact-us' })" 
            />
        </div>
    </section>

    <section class="perspective section-frame">
        <IllStar class="ill-star" />
        <div class="body heading5">
            Just like everyone has a unique thumbprint, so does every brand. 
            <br />That's why we don't believe in a one-size-fits-all approach. 
            Instead, we take the time to <span class="yellow">understand your business</span>, <span class="pink">goals</span>, and <span class="red">target audience</span> to create a strategy that works for you.
        </div>
        <IllSmallStars class="ill-small-stars"/>
    </section>

    <FAQ />
</template>
<style scoped>
    .section-frame {
        display: flow-root;
    }
    .global-blob {
        position: absolute;
        right: -150px;
        top: -140px;
        fill: var(--primary-white-color);
    }

    .intro-section {
        height: 1142px;
        background-color: var(--primary-teal-color);
        padding-inline: 20px;

        background-image: url("src/assets/illustrations/grow.svg");
        background-size: 300px;
        background-repeat: repeat-x;
        background-position-y: 300px;
        background-position-x: -50px;
        
        >.intro-heading {
            color: var(--orange-accent-100);
            margin-top: 130px;
            width: 80%;
            z-index: 3;
        }
        >.body {
            margin-top: 220px;
            color: var(--orange-accent-100);
            line-height: 150%;
            font-weight: var(--font-weight-medium);
            font-size: 20px;
        }
        >.image-1 {
            height: 340px;
            margin-top: 54px;
        }
    }

    .services-process {
        padding-bottom: 150px;
    }

    .process {
        padding-inline: 20px;
        margin-top: 100px;

        >.heading .process-heading {
            font-weight: var(--font-weight-medium);
            color: var(--primary-teal-color);
            font-size: var(--font-size-40);
            width: 90%;
        }
        >.heading .body {
            margin-top: 42px;
            width: 88%;
        }
        >.heading .ill-number-1 {
            display: none;
        }
    }
    .process-list {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        gap: 100px;
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

    .see-our-work {
        margin-top: 100px;
    }

    .perspective {
        height: 819px;
        background-color: var(--black-accent-900);
        display: flex;
        align-items: center;
        justify-self: center;
        position: relative;

        >.ill-star  {
            position: absolute;
            top: 10%;
            left: 10%;
            fill: white;
        }
        >.ill-small-stars  {
            position: absolute;
            bottom: 10%;
            right: 5%;
        }
        >.body {
            color: var(--primary-white-color);
            width: 80%;
            font-weight: var(--font-weight-500);
            text-align: center;
            margin-inline: auto;
        }
    }

    @media screen and (min-width: 800px) {
        .global-blob {
            right: -30px;
            top: -130px;
        }
    }

    @media screen and (min-width: 1024px) {
        .intro-section {
            height: 100vh;
            padding-inline: 80px;

            background-position-y: 420px;
            
            >.intro-heading {
                margin-top: 169px;
                width: 100%;
                font-size: var(--font-size-120);
                line-height: 90%;
                letter-spacing: 2.4px;
            }
            >.body {
                width: 55%;
                font-size: 1.8em;
                margin-top: 6em;
            }
            >.image-1 {
                position: absolute;
                height: auto;
                width: 35%;
                margin-top: 54px;
                right: 100px;
                bottom: 5px
            }
        }

        .services-process {
            padding-bottom: 75px;
        }

        .process {
            padding-inline: 100px;
            margin-top: 190px;

            display: flex;

            >.heading {
                width: 60%;
            }
            >.heading .process-heading {
                font-size: 56px;
                width: 92%;
                line-height: 140%;
            }
            >.heading .body {
                color: #444;
                margin-top: 42px;
                width: 87%;
                line-height: 150%;
            }
            >.heading .ill-number-1 {
                width: fit-content;
                display: flex;
                flex-direction: column;
                align-items: center;

                margin-top: 80px;
                >.ill-trophy {
                    margin-left: -10px;
                }
            }

            >.process-list {
                margin-top: 0px;
            }
        }

        .see-our-work {
            >.body {
                text-align: start;
                width: 78%;
            }
            >.see-our-work-btn {
                margin-inline: 0;
                margin-top: 50px;
                margin-left: 10%;
            }
        }

        .perspective {
            >.ill-star  {
                left: 5%;
                fill: white;
            }
            >.ill-small-stars  {
                top: 10%;
            }
            >.body {
                width: 90%;
                font-weight: var(--font-weight-semibold);
                font-size: 70px;
                line-height: 130%;
                letter-spacing: 1.4px;
            }
        }
    }
</style>