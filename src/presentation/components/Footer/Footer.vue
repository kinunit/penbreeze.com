<script setup lang="ts">
</script>
<template>
    <footer class="footer">
        <div class="company-details">
            <div class="detail-section contact">
                <div class="title">Contact</div>
                <div class="item heading6">hello@penbreeze.com</div>
                <div class="item heading6">+1 (902) 418-5239</div>
            </div>
            <div class="detail-section social">
                <div class="title">Socials</div>
                <div class="item heading6">instagram</div>
                <div class="item heading6">youtube</div>
            </div>
            <div class="detail-section">
                <router-link to="/blog" class="address heading6">Blog</router-link>
                <router-link to="/about" class="address heading6">About</router-link>
                <router-link to="/privacy-policy" class="address heading6">Privacy policy</router-link>
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
        background-color: var(--orange-accent-100);
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
        text-align: center;
    }

    @media screen and (min-width: 1024px) {
        .footer {
            height: 550px;
            padding-inline: 100px;
        }
        .company-details {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            gap: 30%;
        }
        .copyright {
            margin-top: 147px;
        }
    }
</style>