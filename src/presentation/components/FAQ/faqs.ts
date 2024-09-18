import { reactive } from "vue";

export const faqs = reactive([
    {
        question: "What is Digital Marketing?",
        answer: "We estimate the time needed to complete your project based on the content of your presentation and our experience with similar projects.",
        isOpen: false
    },
    {
        question: "What does a digital marketer do?",
        answer: "A digital marketer is responsible for creating and implementing digital marketing strategies to promote a brand, increase online visibility, and drive conversions. This can include tasks such as managing social media accounts, creating content, running paid advertising campaigns, and analyzing data.",
        isOpen: false
    },
    {
        question: "How can digital marketing help my business?",
        answer: "Digital marketing allows businesses to reach a larger audience, increase brand awareness, and target specific demographics more effectively. It can also lead to higher conversion rates and better return on investment compared to traditional forms of marketing.",
        isOpen: false
    },
    {
        question: "What digital marketing channel is best for my business?",
        answer: "There are countless digital channels that you can take advantage of to promote your business. Some popular digital marketing channels include search engine optimization (SEO), social media marketing, email marketing, and pay-per-click advertising. The best digital channel for your business will depend on your target audience, industry, and goals. Keep in mind that it’s important to work with a digital marketing agency that can help you determine the most effective channels for reaching your specific target market.",
        isOpen: false
    },
    {
        question: "How long does it take to see results from digital marketing?",
        answer: "Results from digital marketing can vary depending on various factors, such as the type of campaign, budget, and competition in your industry. As a rule of thumb, building a digital presence takes time and is a long-term commitment – kind of like going to the gym or starting a new routine – it takes time to start seeing obvious results. However, with an effective strategy and consistent efforts, businesses can start seeing some quick wins within a few weeks to a few months.",
        isOpen: false
    },
    {
        question: "How to choose the right digital marketing company",
        answer: "We estimate the time needed to complete your project based on the content of your presentation and our experience with similar projects.",
        isOpen: false
    },
    {
        question: "How to choose the right digital marketing compan",
        answer: `
            With so many digital marketing agencies out there, it can be overwhelming to choose the right one for your business – especially as a small business owner. Here are some key factors to consider when making your decision:
            Experience and Track Record: Look for a company with a proven track record of delivering successful digital marketing campaigns for businesses similar to yours.
            Services Offered: Make sure the company offers the specific internet marketing services you need for your business.
            Communication and Support: Choose a company that values clear communication and provides ongoing support throughout your partnership.
            Pricing: Consider the pricing options offered by the company and make sure they align with your budget.
            Ultimately, it’s important to choose a company that understands your business goals and has the expertise to help you achieve them through effective digital marketing strategies.
        `,
        isOpen: false
    }
])

export function closeFAQOpenState(index:number) {
    faqs[index].isOpen = false;
}
export function openFAQOpenState(index:number) {
    faqs.forEach((faq, faqIndex) => faqIndex === index ?(faq.isOpen = true) : faq.isOpen = false);
}