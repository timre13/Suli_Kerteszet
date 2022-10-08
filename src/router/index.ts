import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactsView from "../views/ContactsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactsView,
            meta: {
                title: "Elérhetőségek"
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `Forest Garden | ${to.meta.title}` : "Forest Garden"
    next()
})

export default router;
