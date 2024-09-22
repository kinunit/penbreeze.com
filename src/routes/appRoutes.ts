import About from "src/presentation/pages/About/About.vue";
import Blog from "src/presentation/pages/Blog/Blog.vue";
import BlogPost from "src/presentation/pages/Blog/BlogPost.vue";
import ContactUs from "src/presentation/pages/ContactUs/ContactUs.vue";
import LandingPage from "src/presentation/pages/LandingPage";
import Services from "src/presentation/pages/Services";
import { type RouteRecordRaw } from "vue-router";

const appRoutes:RouteRecordRaw[] = [
    {
        path:"/",
        name:"Landing page",
        component: LandingPage
    },
    {
        path:"/services",
        name: "Services",
        component: Services
    },
    {
        path:"/about",
        name:"About",
        component: About
    },
    {
        path:"/contact-us",
        name:"Contact Us",
        component: ContactUs
    },
    {
        path:"/blog",
        name:"Blog",
        component: Blog
    },
    {
        path: "/:catchAll(.*)",
        component: BlogPost
    }
]

export default appRoutes;