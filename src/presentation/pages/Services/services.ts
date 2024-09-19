import IconBlob from "src/presentation/components/assets/blob.vue";
import IconFlower from "src/presentation/components/assets/flower.vue";
import IconSharpFlower from "src/presentation/components/assets/sharp-flower.vue";
import type { Component } from "vue";

export interface IIProcessCard {
    title:string;
    desc:string;
    asset:Component;
}

export const processes:IIProcessCard[] = [
    {
        asset: IconBlob,
        title:"Save Time & Cost",
        desc: "Reach out to us via email, social media, text, or our contact form."
    },
    {
        asset: IconFlower,
        title:"Customized solutions",
        desc: "We will talk about your goals and get an idea of what your business needs."
    },
    {
        asset: IconSharpFlower,
        title:"Continued support",
        desc: "Go over project agreement details and get started."
    },
]

export const sectionPageProcessList:IIProcessCard[] = [
    {
        asset: IconBlob,
        title:"Get in touch",
        desc: "Reach out to us via email, social media, text, or our contact form."
    },
    {
        asset: IconFlower,
        title:"Book a discovery call",
        desc: "We will talk about your goals and get an idea of what your business needs."
    },
    {
        asset: IconSharpFlower,
        title:"Get started",
        desc:"Go over project agreement details and get started."
    }
]