<script setup lang="ts">
    import AboutUsMainImage from "src/presentation/components/about-us-main.vue";
    import IllPattern from "src/assets/illustrations/data-research.svg";
    import Testimony from "./components/Testimony/Testimony.vue";
    import Header from "src/presentation/components/Header/Header.vue";
    import IconBlob from "src/assets/illustrations/blob2.svg";
</script>
<template>
    <Header
        navItemColor="#303739"
        logoColor="var(--primary-teal-color)"
        callToActionColor="var(--primary-white-color)"
    />
    <IconBlob class="global-blob" />
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
        
        <IllPattern class="ill-pattern" />
    </section>

    <section class="brag section-frame">
        <div class="intro">
            <div class="heading4 heading">Not to brag.. but we do have the best team</div>
            <div class="body medium-body-text">
                Our team consists of lively and passionate creatives that want to see your business thrive – just as much as you do. They love what they do and this reflects in their work – you’ll see this for yourself when you work with us! 
            </div>
        </div>
        <img src="src/assets/images/team-planning.png" class="brag-image-mobile" />
        <div class="brag-image-wide">
            <img src="src/assets/images/curly-board.png" class="brag-image-wide-src image-1" />
            <img src="src/assets/images/guy-dreadlock.jpg" class="brag-image-wide-src image-2" />
            <img src="src/assets/images/lady-blond.png" class="brag-image-wide-src image-3" />
        </div>
    </section>

    <Testimony />
</template>
<style scoped>
    .section-frame {
        display: flow-root;
        overflow: hidden
    }
    .global-blob {
        position: absolute;
        right: -30px;
        top: -130px;
        fill: var(--primary-teal-color);
    }
    .entry {
        min-height: 100vh;

        >.about-heading {
            color: var(--primary-teal-color);
            margin-inline: auto;
            text-align: center;
            margin-top: 130px;
        }
        >.about-us-image {
            width: 120%;
            height: 314px;
        }
        >.body {
            font-size: var(--font-size-30);
            color: var(--black-accent-100);
            text-align: center;
        }
    }

    .origin {
        height: 1250px;
        padding-inline: 24px;
        position: relative;

        >.heading {
            margin-inline: auto;
            text-align: center;
            margin-top: 70px;
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-40);
        }
        >.ill-pattern {
            position: absolute;
            height: 400px;
            bottom: 0;
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

        >.intro .heading {
            margin-top: 70px;
            width: 80%;
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-40);
        }
        >.intro .body {
            font-weight: var(--font-weight-medium);
            color: var(--black-accent-100);
            margin-top: 24px;
        }
        
        >.brag-image-mobile {
            margin-top: 100px;
            width: calc(100% + 48px);
            margin-left: -24px;
        }

    }
    .brag-image-wide {
        display: none;
    }

    @media screen and (min-width: 800px) {
        .entry {
            height: 1828px;

            >.about-heading {
                text-align: center;
                font-size: var(--font-size-120);
                line-height: 90%;
                letter-spacing: 2.4px;
            }
            >.about-us-image {
                width: 100%;
                height: 1000px;
            }
            >.body {
                font-size: 56px;
                line-height: 140%;
                width: 80%;
                margin-inline: auto;
            }
        }

        .origin {
            height: 900px;
            padding: 100px;
            padding-inline: 70px;

            display: flex;
            
            >.heading {
                margin-inline: 0;
                text-align: start;
                margin-top: 0;
                font-size: var(--font-size-70);
                width: 38%;
            }
            
            >.ill-pattern {
                position: absolute;
                height: unset;
                bottom: 0;
                left: 0;
                scale: 1.2;
                margin-left: -3%;
            }
        }
        .origin-body-list {
            width: 68%;
            margin-top: 0;

            >.body {
                color: var(--black-accent-100);

                display: flex;
            }
            >.body .title {
                font-size: var(--font-size-20);
                width: 20%;
            }
            >.body .desc {
                width: 70%;
                margin-top: 0;
            }
        }

        .brag {
            height: 1336px;
            padding: 70px 0;
            padding-inline: 100px;

            >.intro .heading {
                margin-top: 0;
                margin-inline: auto;
                width: 70%;
                line-height: 130%;
                letter-spacing: 1.4px;
                text-align: center;
                font-size: var(--font-size-70);
            }
            >.intro .body {
                font-weight: var(--font-weight-medium);
                color: var(--black-accent-100);
                font-size: var(--font-size-30);
                line-height: 140%;
                margin-top: 80px;
                width: 55%;
                margin-left: auto;
            }
            
            >.brag-image-mobile {
                display: none;
            }
        }
        
        .brag-image-wide {
            display: flex;
            gap: 1rem;
            margin-left: -90px;
            width: calc(100% + 180px);
            height: 500px;
            align-items: flex-end;
        }
        .brag-image-wide-src {
            width: calc(100% / 3);
            object-fit: cover;
            height: 100%;
        }
        .brag-image-wide .image-2 {
            height: 70%;
            border-radius: 20px 20px 0 0;
        }
        .brag-image-wide .image-3 {
            height: 75%;
        }
    }


    @media screen and (min-width: 1024px) {
        .brag-image-wide .image-1 {
            width: 40%;
            border-radius: 20px 20px 0 0;
        }
        .brag-image-wide .image-2 {
            height: 75%;
            width: 28%;
            border-radius: 20px 20px 0 0;
        }
        .brag-image-wide .image-3 {
            height: 83%;
            width: 29%;
        }
    }

    @media screen and (min-width: 1300px) {
        .brag-image-wide {
            height: 650px;
        }
        .brag-image-wide .image-1 {
            height: 120%;
        }
        .brag-image-wide .image-2 {
            height: 70%;
            width: 30%;
        }
        .brag-image-wide .image-3 {
            height: 80%;
            width: 30%;
        }
    }

    @media screen and (min-width: 1600px) {
        .brag-image-wide .image-2 {
            height: 80%;
            width: 35%;
        }
        .brag-image-wide .image-3 {
            height: 80%;
            width: 25%;
        }
    }
</style>