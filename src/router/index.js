import { createWebHistory, createRouter } from "vue-router";
import ProductDetail from "../pages/detail/ProductDetail.vue"
import AppHome from "../pages/home/AppHome.vue"
const routes = [
    {
        path: "/",
        name : "Home",
        component: AppHome
    },
    {
        path: "/detail/:id",
        name : "Detail",
        component: ProductDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;