<script setup lang="ts">
import FAQ from 'src/presentation/components/FAQ/FAQ.vue';
import Header from "src/presentation/components/Header/Header.vue";
import ContactForm from './components/ContactForm.vue';
</script>
<template>
    <Header
        navItemColor="var(--primary-white-color)"
        logoColor="var(--primary-white-color)"
        callToActionColor="var(--primary-white-color)"
    />
    <ContactForm />
    <FAQ bg2 />
</template>
<style scoped>

</style>