<script setup lang="ts">
import IllStar from "src/assets/illustrations/star.svg";
</script>
<template>
    <section class="section-frame">
        <div class="testimony">
            <div class="heading-frame">
                <IllStar class="star-ill" />
                <div class="heading4 testimony-heading">What our clients say about us.</div>
            </div>
    
            <div class="card-group">
                <div class="testimony-card card-shadow card-1">
                    <div class="body">
                        “I gladly recommend the services of Esther. Throughout the process of building my website, she would check in at each stage to ensure I was okay with the details. I was impressed with the great customer service as she was pleasant to take to and gave advice that would go a long way on getting the best. I was also very pleased with the final look of my website and I am looking forward to working with her on future projects.”
                    </div>
        
                    <div class="person">
                        <div class="name">Adam Mike</div>
                        <div class="office">CEO, Glam by VK</div>
                    </div>
                </div>
                <div class="card-shadow card-2"></div>
                <div class="card-shadow card-3"></div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .section-frame {
        display: flow-root;
        min-height: 665px;
        background-color: var(--primary-teal-color);
    }

    .testimony {
        
        >.heading-frame {
            margin-top: 50px;
        }
        >.heading-frame .star-ill {
            margin-left: 24px;
            height: 42px;
            width: 42px;
        }
        >.heading-frame .testimony-heading {
            margin-top: 23px;
            font-size: var(--font-size-40);
            font-weight: var(--font-weight-normal);
            color: var(--primary-white-color);
            margin-left: 24px;
            width: 80%;
        }
    }

    .card-group {
        margin-top: 60px;
        position: relative;
        width: 95%;
        margin-inline: auto;

        >.testimony-card {
            margin-inline: auto;
            padding: 30px;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            background-color: var(--primary-white-color);
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

        >.card-shadow {
            box-shadow: 0px 73.161px 58.529px 0px rgba(0, 0, 0, 0.02), 0px 47.419px 34.277px 0px rgba(0, 0, 0, 0.02), 0px 28.181px 18.643px 0px rgba(0, 0, 0, 0.01), 0px 14.632px 9.511px 0px rgba(0, 0, 0, 0.01), 0px 5.961px 4.769px 0px rgba(0, 0, 0, 0.01), 0px 1.355px 2.303px 0px rgba(0, 0, 0, 0.00);
        }
        >.card-1,
        .card-2,
        .card-3 {
            position: absolute;
            top: 0;
            border-radius: 9px;
        }
        >.card-1 {
            z-index: 3;
        }
        >.card-2 {
            width: 90%;
            height: 200px;
            top: 60px;
            margin-left: 5%;
            z-index: 2;
            background-color: #239A9E;
        }
        >.card-3 {
            width: 80%;
            height: 200px;
            top: 70px;
            left: 10%;
            z-index: 1;
            background-color: #239A9E;
        }
    }


    @media screen and (min-width: 1024px) {
        .section-frame {
            height: 906px;
        }
        .testimony {
            display: flex;
            margin-top: 136px;
            padding-inline: 100px;
        }

        .card-group {
            margin-top: 60px;
            position: relative;
            width: 750px;
            height: 410px;

            .testimony-card {
                width: 750px;
                height: 408px;

                >.body {
                    line-height: 32px;
                }
                .person {
                    margin-top: 64px;
                }
            }

            >.card-1,
            .card-2,
            .card-3 {
                height: 100%;
                width: 90%;
                top: 0;
                left: 0;
            }
            >.card-2 {
                margin-left: 5%;
                top: 5%;
            }
            >.card-3 {
                margin-left: 10%;
                top: 10%;
            }
        }
    }
</style>