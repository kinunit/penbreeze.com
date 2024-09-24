<script setup lang="ts">
import CircleIconButton from 'src/presentation/components/Buttons/IconButtons/CircleIconButton.vue';
import ContactForm from './components/ContactForm/ContactForm.vue';
import ServicesSection from './components/Services/ServicesSection.vue';
import Testimony from '../About/components/Testimony/Testimony.vue';
import ProcessCard from '../Services/components/ProcessCard.vue';
import illIslandWithFlag from "src/assets/illustrations/island-with-flag.svg";
import { sectionPageProcessList } from '../Services/services';
import Header from "src/presentation/components/Header/Header.vue";
import IconBlob from "src/assets/illustrations/blob2.svg";
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
    <Header
        navItemColor="#303739"
        logoColor="var(--primary-teal-color)"
        callToActionColor="var(--primary-white-color)"
    />
    <IconBlob class="global-blob" />

    <section class="hero section-frame">
        <div class="hero-ill"></div>
        <div class="hero-heading heading4">Creative Marketing for Iconic Brands</div>
        <div class="action">
            <div class="hero-sub-heading medium-body-text">We blend creativity with strategy to deliver exceptional results</div>
            <CircleIconButton 
                label="see what we do" 
                class="see-our-work-btn" 
                :clickAction="()=> router.push({ path: '/services' })" 
            />
        </div>
    </section>

    <section class="about-us section-frame">
        <div class="about-heading heading4">Located on the Cape Breton Island</div>
        <div class="about-sub-heading heading5">We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services.</div>
        <CircleIconButton 
            label="meet the team" 
            class="meet-the-team-button" 
            :clickAction="()=> router.push({ path: '/about' })"
        />
        <illIslandWithFlag class="island-ill" />
    </section>

    <ServicesSection />

    <section class="discover section-frame">
        <div class="heading">
            <div class="discover-heading heading4">
                Turning your dreams into reality excites us - it's what we're passionate about!
            </div>
            
            <div class="satisfied-customers"></div>
        </div>

        <div class="process-list">
            <ProcessCard 
                v-for="(process, index) in sectionPageProcessList" 
                :key="index"
                :title="process.title"
                :desc="process.desc"
                :asset="process.asset"
            />
        </div>
    </section>

    <ContactForm mini />

    <Testimony />
</template>
<style scoped>
    .section-frame {
        display: flow-root
    }
    .global-blob {
        position: absolute;
        right: -30px;
        top: -130px;
        fill: var(--primary-teal-color);
    }
    .hero {
        background-color: #F1F6F7;
        padding-inline: 18px;
        height: 100vh;

        >.hero-heading {
            margin-top: 393px;
            color: var(--primary-teal-color);
        }
        >.action {
            margin-top: 27px;
            display: flex;
            flex-direction: column;
            gap: 27px;
        }
        >.action .hero-sub-heading {
            color: var(--black-accent-100);
            font-weight: var(--font-weight-medium);
            width: 85%;
        }
    }

    .about-us {
        height: 100vh;
        padding-inline: 18px;
        background: linear-gradient(180deg, #07979B 0%, #5CA989 100%);

        display: flex;
        flex-direction: column;
        gap: 32px;

        position: relative;
        overflow: hidden;

        >.about-heading {
            margin-top: 72px;
            width: 80%;
    
            background: linear-gradient(94deg, #FFF 0.99%, #FFD4CD 93.11%);;
            background-clip: text;
            color: transparent;
            z-index: 1;
        }
        >.about-sub-heading {
            width: 80%;
            font-weight: var(--font-weight-normal);
            line-height: 140%;
            color: var(--primary-white-color);
            z-index: 1;
        }
        >.meet-the-team-button {
            background: none;
            border: 2px solid var(--primary-white-color);
            margin-left: 50%;
            z-index: 1;
        }
        >.island-ill {
            position: absolute;
            bottom: -13.8%;
            left: -13%;
            z-index: 0;
            /* width: 100%; */
            /* height: 300px; */
        }
    }

    .discover {
        min-height: 100vh;
        padding: 50px 18px 100px;
        
        >.heading .discover-heading {
            font-size: var(--font-size-40);
            font-weight: var(--font-weight-normal);
            color: var(--primary-teal-color);
        }
        >.heading .satisfied-customers {
            height: 180px;
            width: 200px;
            background-color: #B76FEF;
            margin: 0 auto;
            margin-top: 52px;
        }

        >.process-list {
            display: grid;
            row-gap: 100px;
            margin-top: 106px;
        }
    }

    .discover-prompt {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
        text-align: center;

        >.title {
            font-weight: var(--font-weight-semibold);
        }

        >.desc {
            font-weight: var(--font-weight-normal);
            color: var(--black-accent-100);
        }
    }
    .get-in-touch {
        margin-top: 50px;
        width: 80%;
    }
    .book {
        margin-top: 50px;
        width: 85%;
    }
    .get-started {
        margin-top: 50px;
        width: 65%;
    }

    @media screen and (min-width: 1024px) {
        .hero {
            padding-inline: 48px;

            >.hero-heading {
                width: 70%;
                margin-top: 188px;
                font-size: var(--font-size-120);
                line-height: 130%;
                letter-spacing: 2.4px;
            }
            >.action {
                flex-direction: row;
                width: 50%;
            }
            >.action .hero-sub-heading {
                width: 50%;
            }
        }

        .about-us {
            display: flex;
            gap: 65px;
            padding-inline: 140px;
            position: relative;
            flex-direction: row;

            >.about-heading {
                width: 50%;
                margin-top: 72px;
                font-size: var(--font-size-100);
                line-height: 130%;
                letter-spacing: 2px;
            }
            >.about-sub-heading {
                width: 42%;
                margin-top: 93px;
                font-size: 56px
            }
            >.meet-the-team-button {
                position: absolute;
                top: 50%;
                right: calc(calc(100% - 150px) - 140px);
            }
            .island-ill {
                scale: 1.5;
                left: 10%;
            }
        }

        .discover {
            min-height: 100vh;
            padding: 50px 18px 100px;

            >.heading {
                display: flex;
                align-items: center;
                margin-inline: 140px;
            }
            >.heading .discover-heading {
                font-size: 56px;
                width: 50%;
                line-height: 140%;
            }

            >.process-list {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                margin-top: 135px;
            }
        }
    }
</style>««