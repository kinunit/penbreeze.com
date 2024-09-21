import About from "src/presentation/pages/About/About.vue";
import Blog from "src/presentation/pages/Blog/Blog.vue";
import ContactUs from "src/presentation/pages/ContactUs/ContactUs.vue";
import LandingPage from "src/presentation/pages/LandingPage";
import Services from "src/presentation/pages/Services";
import { type RouteRecordRaw } from "vue-router";

const appRoutes:RouteRecordRaw[] = [
    {
        path:"/",
        component: LandingPage
    },
    {
        path:"/services",
        component: Services
    },
    {
        path:"/about",
        component: About
    },
    {
        path:"/contact-us",
        component: ContactUs
    },
    {
        path:"/blog",
        component: Blog
    },
    {
        path:"/*",
        component: 
    }
]

export default appRoutes;