import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactsView from "../views/ContactsView.vue";
import BlogView from "../views/BlogView.vue";
import PlantsView from "../views/PlantsView.vue";
import SingleBlogView from "../views/SingleBlogView.vue";
import SinglePlantView from "../views/SinglePlantView.vue";

const router = createRouter({
    history: createWebHistory(window.location.pathname),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                ignored: true,
            },
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactsView,
            meta: {
                title: "Elérhetőségek",
            },
        },
        {
            path: "/plants",
            name: "plants",
            component: PlantsView,
            meta: {
                title: "Növényeink",
            },
        },
        {
            path: "/plant/:plant",
            name: "plant",
            component: SinglePlantView,
            meta: {
                ignored: true,
            },
        },
        {
            path: "/blog/:blog",
            name: "blog",
            component: SingleBlogView,
            meta: {
                ignored: true,
            },
        },
        {
            path: "/blogs",
            name: "blogs",
            component: BlogView,
            meta: {
                title: "Blog",
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `Forest Garden | ${to.meta.title}` : "Forest Garden";
    next();
});

export default router;
