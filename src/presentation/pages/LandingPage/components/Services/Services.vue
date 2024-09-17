<script setup lang="ts">
import FlatIconButton from 'src/presentation/components/Buttons/IconButtons/FlatIconButton.vue';
import ServicesList from './ServicesList.vue';

</script>
<script lang="ts">
    export default {
        name:"Services"
    }
</script>
<template>
    <section class="section">
        <div class="services-heading heading5">We are experts at Building Brands</div>
        <FlatIconButton label="see all services" class="see-all-services-button" />
        
        <ServicesList class="services-list" />
    </section>
</template>
<style scoped>
    .section {
        min-height: 100vh;
        padding-inline: 24px;
    }
    .services-heading {
        margin-top: 100px;
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
</style>