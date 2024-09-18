import About from "src/presentation/pages/About/About.vue";
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
    }
]

export default appRoutes;