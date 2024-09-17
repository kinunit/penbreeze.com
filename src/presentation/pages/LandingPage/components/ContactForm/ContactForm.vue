<script lang="ts">
    export default {
        name: "ContactForm"
    }
</script>
<script setup lang="ts">
    import PrimaryTextButton from 'src/presentation/components/Buttons/TextButton/PrimaryTextButton.vue';
    import Form from 'src/presentation/components/Form/Form.vue';
    import type { IInputFieldModel } from 'src/presentation/components/Form/InputField/input-field-types';
    import InputField from 'src/presentation/components/Form/InputField/InputField.vue';
    import { reactive } from 'vue';

    const firstNameModel = reactive<IInputFieldModel>({
        label: "First name",
        placeholder: "first name",
        value: ""
    })

    const lastNameModel = reactive<IInputFieldModel>({
        label: "Last name",
        placeholder: "last name",
        value: ""
    })

    const emailModel = reactive<IInputFieldModel>({
        label: "Email",
        placeholder: "example@mail.com",
        value: ""
    })

    const phoneNumberModel = reactive<IInputFieldModel>({
        label: "Phone number",
        value: ""
    })

    const businessNameModel = reactive<IInputFieldModel>({
        label: "Business name",
        value: ""
    })

    const websiteAddressModel = reactive<IInputFieldModel>({
        label: "Website Address",
        placeholder: "www.example.com",
        value: ""
    })

</script>
<template>
    <div class="contact-form">
        <div class="contact-form-heading heading4">Tell us your Story</div>
        {{ firstNameModel.value }}
        <Form class="form">
            <template v-slot:form-fields>
                <InputField
                    :label="firstNameModel.label"
                    :placeholder="firstNameModel.placeholder"
                    :value="firstNameModel.value"
                    @action="(value:string)=> firstNameModel.value = value"
                />
                <InputField
                    :label="lastNameModel.label"
                    :placeholder="lastNameModel.placeholder"
                    :value="lastNameModel.value"
                    @action="(value:string)=> lastNameModel.value = value"
                />
                <InputField
                    :label="emailModel.label"
                    :placeholder="emailModel.placeholder"
                    :value="emailModel.value"
                    @action="(value:string)=> emailModel.value = value"
                />
                <InputField
                    :label="phoneNumberModel.label"
                    :placeholder="phoneNumberModel.placeholder"
                    :value="phoneNumberModel.value"
                    @action="(value:string)=> phoneNumberModel.value = value"
                />
                <InputField
                    :label="businessNameModel.label"
                    :placeholder="businessNameModel.placeholder"
                    :value="businessNameModel.value"
                    @action="(value:string)=> businessNameModel.value = value"
                />
                <InputField
                    :label="websiteAddressModel.label"
                    :placeholder="websiteAddressModel.placeholder"
                    :value="websiteAddressModel.value"
                    @action="(value:string)=> websiteAddressModel.value = value"
                />

                <PrimaryTextButton label="Request Service" class="request-service-btn" />
            </template>
        </Form>
    </div>
</template>
<style scoped>
    .contact-form {
        background-color: #05969B;
        padding: 100px 24px;
        min-height: 100vh;
    }
    .contact-form-heading {
        font-size: var(--font-size-40);
    }
    .form {
        margin-top: 72px;

        >.request-service-btn {
            margin-top: 72px;
        }
    }
</style>