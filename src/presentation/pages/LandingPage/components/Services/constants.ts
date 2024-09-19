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
        title: "Branding & Content coverage",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    },
    {
        asset: IWebDevelopment,
        title: "Website Design",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    },
    {
        asset: IllSeo,
        title: "Search engine Optimization",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    },
    {
        asset: IShoppingSaleMail,
        title: "Branding & Content coverage",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    },
    {
        asset: IllMegaPhone,
        title: "Website Design",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    },
    {
        asset: IllSupport,
        title: "Search engine Optimization",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    }
]

export const minServices:IService[] = [
    {
        asset: IllNavTree,
        title: "Branding & Content coverage",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    },
    {
        asset: IWebDevelopment,
        title: "Website Design",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    },
    {
        asset: IShoppingSaleMail,
        title: "Search engine Optimization",
        description: "We specialize in crafting personalized and impactful campaigns designed to connect directly with your audience and effectively promote your products or services."
    },
]