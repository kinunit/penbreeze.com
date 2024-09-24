<script setup lang="ts">
import { allServices, minServices } from './constants';
import ServiceCard from './ServiceCard.vue';

interface IServicesListProps {
    showAll?:boolean;
}

const props = defineProps<IServicesListProps>();
const servicesList = props.showAll ?allServices :minServices;

</script>
<script lang="ts">
    export default {
        name:"ServicesList"
    }
</script>
<template>
    <div class="services-list">
        <ServiceCard
            v-for="(service, index) in servicesList"
            :index="index + 1"
            :title="service.title"
            :description="service.description"
            :asset="service.asset"
        />
    </div>
</template>
<style lang="css" scoped>
    .services-list {
        display: flex;
        flex-direction: column;
        gap: 56px;
    }
    .service-ill {
        height: 230px;
        width: 100%;
    }

    @media screen and (min-width: 1024px) {
        .services-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>