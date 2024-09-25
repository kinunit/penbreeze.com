import IllNavTree from "src/presentation/components/assets/nav-tree.vue";
import IWebDevelopment from "src/presentation/components/assets/web-development.vue";
import IShoppingSaleMail from "src/presentation/components/assets/shopping-sale-mail.vue";
import IllBranding from "src/presentation/components/assets/branding-content.vue";
import IllSeo from "src/presentation/components/assets/seo.vue";
import IllMegaPhone from "src/presentation/components/assets/megaphone.vue";
import IllSupport from "src/presentation/components/assets/virtual-assistant.vue";

import type { IService } from "./ServiceCard.vue";

export const allServices:IService[] = [
    {
        asset: IllBranding,
        title: "Branding",
        description: "Your brand identity is more than fancy colours and fonts. It is how people FEEL about your brand - and I can help with that - by creating graphics that truly represent your brand."
    },
    {
        asset: IWebDevelopment,
        title: "Website Design",
        description: "A well-designed and user-friendly website is crucial for any business in today's digital world. Our team can help you design a professional and visually appealing website that effectively represents your brand and converts visitors into customers."
    },
    {
        asset: IllSeo,
        title: "Search engine Optimization (SEO)",
        description: "We will work with you to create SEO-friendly content that follows the Webmaster Guidelines to help you achieve your business goals and avoid penalization by Search Engines."
    },
    {
        asset: IShoppingSaleMail,
        title: "Email Marketing",
        description: "With our email marketing services, we'll help you create and send personalized and targeted emails to your subscribers, driving more conversions and building customer loyalty."
    },
    {
        asset: IllMegaPhone,
        title: "Social Media Marketing",
        description: "Our social media marketing experts can help you create and implement effective social media campaigns across various platforms such as Facebook, Instagram, Twitter, and LinkedIn. This will help you reach a wider audience, engage with potential customers, and build brand awareness."
    },
    {
        asset: IllSupport,
        title: "Site Maintenance & Support",
        description: "From updating website content to fixing technical issues, our team can handle all your website maintenance and support needs, allowing you to focus on running your business."
    }
]

export const minServices:IService[] = [
    {
        asset: IllNavTree,
        title: "Graphic Design & Branding",
        description: "Your brand identity is more than fancy colours and fonts. It is how people FEEL about your brand - and I can help with that - by creating graphics that truly represent your brand."
    },
    {
        asset: IWebDevelopment,
        title: "Website Design",
        description: "The first impression that your site produces in the minds of its users is a BIG deal. If your site looks buggy, no one will stay on it. That's why our focus is on designing you a stunning site"
    },
    {
        asset: IShoppingSaleMail,
        title: "Search engine Optimization (SEO)",
        description: "We will work with you to create SEO-friendly content that follows the Webmaster Guidelines to help you achieve your business goals and avoid penalization by Search Engines."
    },
]