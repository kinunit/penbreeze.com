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
    import IllContact from "src/assets/illustrations/contact-ill.svg";
    import IllContactWide from "src/assets/illustrations/contact-ill-2.svg";

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
        <div class="initial-section">
            <div class="contact-form-heading heading4">Tell us your Story</div>
        </div>

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

                <PrimaryTextButton
                    width=""
                    label="Request Service" 
                    class="request-service-btn"
                />
            </template>
        </Form>

        <IllContact class="mobile-ill" />
        <IllContactWide class="wide-screen-ill" />
    </div>
</template>
<style scoped>
    .contact-form {
        position: relative;
        background-color: #05969B;
        padding: 100px 24px;
        overflow: hidden;

        display: flex;
        flex-direction: column;

        >.mobile-ill {
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
        }
        >.wide-screen-ill {
            display: none;
        }
    }
    .contact-form-heading {
        font-size: var(--font-size-40);
    }
    .form {
        margin-top: 72px;
        margin-bottom: 276px;

        >.request-service-btn {
            margin-top: 72px;
            width: 100% !important;
        }
    }

    @media screen and (min-width: 1024px) {
        .contact-form {
            padding-inline: 80px;
            height: 100vh;
            width: 90%;
            margin: 60px auto;
            border-radius: 24px;
            flex-direction: row;
            align-items: flex-start;
            gap: 58px;

            >.mobile-ill {
                display: none;
            }
            >.wide-screen-ill {
                display: block;
                position: absolute;
                /* width: 100%; */
                /* left: -10%; */
                scale: 1;
                right: 0%;
                bottom: 0%;
            }
        }

        .initial-section {

            >.contact-form-heading {
                font-size: 70px;
            }
        }
        
        .form {
            width: 55%;
            margin-top: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 70px;

            >.request-service-btn {
                margin-top: 62px;
                width: 206% !important;
            }
        }
    }
</style>