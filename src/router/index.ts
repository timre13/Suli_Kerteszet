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
})

export default router
