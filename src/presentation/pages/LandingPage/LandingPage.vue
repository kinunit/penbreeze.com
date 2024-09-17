<script setup lang="ts">
import CircleIconButton from 'src/presentation/components/Buttons/IconButtons/CircleIconButton.vue';
import Services from './components/Services';
import ContactForm from './components/ContactForm/ContactForm.vue';
import Footer from 'src/presentation/components/Footer/Footer.vue';

</script>
<template>
    <section class="hero section-frame">
        <div class="hero_ill"></div>
        <div class="hero_text">
            <div class="hero-heading heading4">Creative Marketing for Iconic Brands</div>
            <div class="hero-sub-heading medium-body-text">We blend creativity with strategy to deliver exceptional results</div>
            <CircleIconButton label="see our work"  />
        </div>
    </section>

    <section class="about-us section-frame">
        <div class="about-heading heading4">Located on the Cape Breton Island</div>
        <div class="about-sub-heading heading5">We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services.</div>
        <CircleIconButton label="meet the team" class="meet-the-team-button" />
    </section>

    <Services />

    <section class="discover section-frame">
        <div class="discover-heading heading4">
            Turning your <br /> dreams
            into reality excites us - it's what we're passionate about!
        </div>
        
        <div class="satisfied-customers"></div>
        <div class="gooey"></div>

        <div class="discover-prompt get-in-touch">
            <div class="title heading5">Get in touch</div>
            <div class="desc medium-body-text">Reach out to us via email, social media, text, or our contact form.</div>
        </div>

        <div class="flower"></div>

        <div class="discover-prompt book">
            <div class="title heading5">Book a discovery call</div>
            <div class="desc medium-body-text">We will talk about your goals and get an idea of what your business needs.</div>
        </div>

        <div class="flower"></div>

        <div class="discover-prompt get-started">
            <div class="title heading5">Get started</div>
            <div class="desc medium-body-text">Go over project agreement details and get started.</div>
        </div>
    </section>

    <ContactForm />

    <section class="testimony section-frame">
        <div class="star-ill"></div>
        <div class="heading4 testimony-heading">What our clients say about us.</div>
        <div class="testimony-card">
            <div class="body">
                “I gladly recommend the services of Esther. Throughout the process of building my website, she would check in at each stage to ensure I was okay with the details. I was impressed with the great customer service as she was pleasant to take to and gave advice that would go a long way on getting the best. I was also very pleased with the final look of my website and I am looking forward to working with her on future projects.”
            </div>

            <div class="person">
                <div class="name">Adam Mike</div>
                <div class="office">CEO, Glam by VK</div>
            </div>
        </div>
    </section>

    <Footer />
</template>
<style scoped>
    .section-frame {
        display: flow-root
    }
    .hero {
        padding-inline: 18px;
        height: 100vh;
    }
    .hero_text {
        margin-top: 393px;
        display: flex;
        flex-direction: column;
        gap: 27px;
    }
    .hero-heading {
        color: var(--primary-teal-color);
    }
    .hero-sub-heading {
        color: var(--black-accent-100);
        font-weight: var(--font-weight-normal);
        width: 85%;
    }

    .about-us {
        height: 100vh;
        padding-inline: 18px;
        background: linear-gradient(180deg, #07979B 0%, #5CA989 100%);

        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .about-heading {
        margin-top: 72px;
        width: 80%;

        background: linear-gradient(94deg, #FFF 0.99%, #FFD4CD 93.11%);;
        background-clip: text;
        color: transparent;
    }
    .about-sub-heading {
        width: 80%;
        font-weight: var(--font-weight-normal);
        line-height: 140%;
        color: var(--primary-white-color);
    }
    .meet-the-team-button {
        background: none;
        border: 2px solid var(--primary-white-color);
        margin-left: 50%;
    }

    .discover {
        min-height: 100vh;
        padding: 50px 18px 100px;
    }
    .discover-heading {
        font-size: var(--font-size-40);
        font-weight: var(--font-weight-normal);
    }
    .satisfied-customers {
        height: 180px;
        width: 200px;
        background-color: #B76FEF;
        margin: 0 auto;
        margin-top: 52px;
    }
    .gooey {
        height: 95px;
        width: 90px;
        background-color: #1B5EC9;
        margin: 0 auto;
        margin-top: 100px;
    }
    .flower {
        height: 85px;
        width: 85px;
        background-color: #A483D0;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 50px;
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

    .testimony {
        height: 665px;
        background-color: var(--primary-teal-color);

        >.star-ill {
            margin-top: 50px;
            margin-left: 24px;
            height: 42px;
            width: 42px;
            background-color: #FFF500;
        }
        >.testimony-heading {
            margin-top: 23px;
            font-size: var(--font-size-40);
            font-weight: var(--font-weight-normal);
            color: var(--primary-white-color);
            margin-left: 24px;
            width: 80%;
        }
    }
    .testimony-card {
        width: 95%;
        margin-inline: auto;
        padding: 30px;
        border-radius: 9px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: var(--primary-white-color);
        margin-top: 60px;
        font-family: var(--Bricolage-Grotesque);

        >.body {
            font-size: var(--font-size-14);
            line-height: 17.65px;
            color: #051D1E;
        }
        >.person .name {
            font-weight: var(--font-weight-semibold);
            color: #051D1E;
        }
        >.person .office {
            font-size: var(--font-size-12);
            color: var(--blue-accent-100);
        }
    }
</style>