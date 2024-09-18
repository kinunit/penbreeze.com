import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import appRoutes from "./appRoutes";

const router = createRouter({
    history: createWebHistory(),
    routes: appRoutes
});

export default router;