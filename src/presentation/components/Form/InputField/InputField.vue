<script setup lang="ts">
    import type { InputFieldProps } from './input-field-types';

    const props = defineProps<InputFieldProps>();
    const emit = defineEmits(["action"]);

    function handleInput(event:Event) {
        const value = (event.target as HTMLInputElement).value;
        emit("action", value);
    }
</script>
<template>
    <div class="input-field-wrapper">
        <label class="label" v-show="props.label">{{ props.label }}</label>
        <div class="input-field">
            <input 
                class="input"
                :placeholder="props.placeholder"
                :value="props.value"
                @input="handleInput"
            />
        </div>
    </div>
</template>
<style scoped>
    .input-field-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .label {
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-16);
        color: #333333;
    }
    .input-field {
        background-color: #FCF6EE;
        height: 60px;
        padding-inline: 16px;
        border-radius: 100px;
    }
    .input {
        background-color: transparent;
        width: 100%;
        height: 100%;
        border: 0;
        outline: 0;
        font-family: var(--Inter);
        font-size: var(--font-size-16);
    }
    .input::placeholder {
        color: #8E8E8E;
    }
</style>