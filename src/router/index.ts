import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactsView from "../views/ContactsView.vue";
import BlogView from "../views/BlogView.vue";
import PlantsView from "../views/PlantsView.vue";
import ToolsView from "../views/ToolsView.vue";
import SingleBlogView from "../views/SingleBlogView.vue";
import SinglePlantView from "../views/SinglePlantView.vue";
import SingleToolView from "../views/SingleToolView.vue";

const router = createRouter({
    history: createWebHashHistory(window.location.pathname),
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
            path: "/tools",
            name: "tools",
            component: ToolsView,
            meta: {
                title: "Eszközeink",
            },
        },
        {
            path: "/tool/:tool",
            name: "tool",
            component: SingleToolView,
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
        {
            path: "/contacts",
            name: "contacts",
            component: ContactsView,
            meta: {
                title: "Elérhetőségek",
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `Forest Garden | ${to.meta.title}` : "Forest Garden";
    next();
});

export default router;
