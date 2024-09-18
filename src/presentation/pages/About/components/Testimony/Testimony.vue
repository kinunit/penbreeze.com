<script setup lang="ts">
</script>
<template>
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
</template>
<style scoped>
    .section-frame {
        display: flow-root
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