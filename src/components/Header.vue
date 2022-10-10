<template>
    <div id="header">
        <div id="titlebox">
            <RouterLink to="/">
                <h1>Forest Garden</h1>
            </RouterLink>
        </div>
        <div id="navbox">
            <div id="title">
                <span>{{ currentRoute.meta.title }}{{ currentRoute.meta.title ? ":" : "" }}</span>
            </div>
            <div v-if="windowWidth > 450" id="link">
                <RouterLink v-for="(nav, index) in navItems" :key="index" :to="nav.to">{{ nav.label }}</RouterLink>
            </div>
            <div v-else id="menu-container">
                <div id="menu" @click="menuIsOpen = !menuIsOpen">
                    <MenuIcon class="icon" />
                </div>
            </div>
        </div>

        <Transition name="menu">
            <div id="menu-content" v-if="menuIsOpen && windowWidth < 450">
                <RouterLink v-for="(nav, index) in navItems" :key="index" :to="nav.to">
                    <div class="item">
                        <span>{{ nav.label }}</span>
                    </div>
                </RouterLink>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { RouterLink } from "vue-router";
    import router from "@/router";
    import { onMounted, ref } from "vue";
    import MenuIcon from "./MenuIcon.vue";

    const currentRoute = router.currentRoute;

    const windowWidth = ref(window.innerWidth);

    const menuIsOpen = ref(false);

    const navItems = [
        { to: "/contacts", label: "Elérhetőségek" },
        { to: "/blogs", label: "Blog" },
    ];

    onMounted(() => {
        window.onresize = () => {
            windowWidth.value = window.innerWidth;
        };
        const func = () => {
            if (menuIsOpen.value) menuIsOpen.value = false;
        };
        document.querySelector("#body")?.addEventListener("mouseup", func);
        document.querySelector("#titlebox")?.addEventListener("mouseup", func);
    });
</script>

<style scoped lang="scss">
    #header {
        flex: 1 0 20vh;
        display: grid;
        grid-template-rows: 2fr 1fr auto;

        #menu-content {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            background-color: $secondary-bg-color;

            a {
                text-decoration: none;
            }

            .item {
                padding: 1rem;
                border-bottom: 1px solid $secondary-accent-bg-color;
                display: grid;
                place-items: center;
                font-size: 2rem;
                color: $secondary-font-color;
            }
        }

        #titlebox {
            display: grid;
            place-items: center;
            background-color: $secondary-bg-color;
            z-index: 2;

            a,
            h1 {
                text-decoration: none;
                color: $title-color;
                font-size: 4rem;
                text-align: center;
            }
        }

        #navbox {
            background-color: $secondary-accent-bg-color;
            display: flex;
            align-items: stretch;
            z-index: 2;

            #title {
                flex: 1 1;
                display: flex;
                align-items: center;
                padding: 0 1rem 0 2rem;

                span {
                    font-size: 1.9rem;
                    font-weight: bold;
                }
            }

            #menu-container {
                flex: 1 0;
                display: flex;
                justify-content: end;
                align-items: center;
                box-sizing: border-box;
                padding: 1rem;

                #menu {
                    border: 2px solid black;
                    box-sizing: border-box;
                    padding: 0.3rem;
                    display: grid;
                    place-items: center;
                    border-radius: 0.3rem;
                    aspect-ratio: 1 / 1;
                    cursor: pointer;
                    &:active {
                        transform: translate(1px, 2px);
                    }
                    .icon {
                        width: 1.5rem;
                        pointer-events: none;
                    }
                }
            }

            #link {
                flex: 1 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                justify-content: flex-end;
                box-sizing: border-box;
                padding: 0 2rem 0 2rem;
                gap: 2rem;
                font-size: 1.3rem;
                a {
                    color: $secondary-font-color;
                    text-decoration: none;
                }
                .router-link-active {
                    text-decoration: underline;
                }
            }
        }
    }

    .menu-enter-active,
    .menu-leave-active {
        transition: transform 0.4s ease;
        z-index: 1;
    }

    .menu-enter-from {
        transform: translateY(-100%);
    }

    .menu-leave-from,
    .menu-enter-to {
        transform: translateX(0);
    }

    .menu-leave-to {
        transform: translateY(-100%);
    }
</style>
