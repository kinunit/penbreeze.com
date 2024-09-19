<script setup lang="ts">
import FlatIconButton from 'src/presentation/components/Buttons/IconButtons/FlatIconButton.vue';
import ServicesList from './ServicesList.vue';

interface IServicesSectionProps {
    showAll?:boolean;
}

const props = defineProps<IServicesSectionProps>()

</script>
<script lang="ts">
    export default {
        name:"ServicesSection"
    }
</script>
<template>
    <section class="section">
        <div class="heading-top">
            <div class="services-heading heading5">We are experts at Building Brands</div>
            <FlatIconButton label="see all services" class="see-all-services-button" v-show="!props.showAll" />
        </div>
        
        <ServicesList class="services-list" :showAll="props.showAll" />
    </section>
</template>
<style scoped>
    .section {
        min-height: 100vh;
        padding-inline: 24px;
    }
    .heading-top {
        margin-top: 100px;
    }
    .services-heading {
        font-size: var(--font-size-40);
        font-weight: var(--font-weight-semibold);
        line-height: 110%;
        letter-spacing: 0.8px;
    }
    .see-all-services-button{
        margin-top: 2rem;
        color: var(--primary-teal-color);
        font-size: var(--font-size-18);
    }

    .services-list {
        margin-top: 100px;
    }

    @media screen and (min-width: 1024px) {
        .heading-top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: calc(100% - calc(118px * 2));
            margin-inline: auto;

            >.services-heading {
                width: 50%;
                font-size: 70px;
            }
        }

        .services-list {
            margin-inline: 52px;
        }
    }
</style>