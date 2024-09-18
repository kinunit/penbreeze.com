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
    }
]

export default appRoutes;