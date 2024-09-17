import LandingPage from "src/presentation/pages/LandingPage/LandingPage.vue";
import { type RouteRecordRaw } from "vue-router";

const appRoutes:RouteRecordRaw[] = [
    {
        path:"/",
        component: LandingPage
    }
]

export default appRoutes;