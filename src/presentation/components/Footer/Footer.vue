<script setup lang="ts">
</script>
<template>
    <footer class="footer">
        <div class="company-details">
            <div class="detail-section contact">
                <div class="title">Contact</div>
                <div class="item heading6">contact@penbreeze.com</div>
                <div class="item heading6">+1 (902) 418-5239</div>
            </div>
            <div class="detail-section social">
                <div class="title">Socials</div>
                <div class="item heading6">instagram</div>
            </div>
            <div class="detail-section">
                <div class="title">Canada</div>
                <div class="address heading6">Lorem ipsum No. 375 Cape Breton Island</div>
            </div>
        </div>
        <div class="copyright">
            © Copyright 2024. PenBreeze. All rights reserved.
        </div>
    </footer>
</template>
<style scoped>
    .footer {
        padding: 100px 40px;
        background-color: var(--primary-white-color);
    }
    .company-details {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 50px;

        >.detail-section {
            font-weight: var(--font-weight-normal);
            display: flex;
            flex-direction: column;
        }
        .detail-section.contact {
            gap: 15px;
        }
        .detail-section.social {
            gap: 24px;
        }
    }
    .copyright {
        font-weight: var(--font-size-14);
        margin-top: 72px;
    }
</style>