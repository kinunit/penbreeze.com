<script lang="ts">
    export default {
        name:"Form"
    }
</script>
<script setup lang="ts">

</script>
<template>
    <form class="form" v-on:submit="(event:Event)=> event.preventDefault()">
        <slot name="form-fields"></slot>
    </form>
</template>
<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
</style>