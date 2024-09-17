import { createMemoryHistory, createRouter } from "vue-router";
import appRoutes from "./appRoutes";

const router = createRouter({
    history: createMemoryHistory(),
    routes: appRoutes
});

export default router;