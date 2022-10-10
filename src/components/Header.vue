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
                <RouterLink to="/contacts">Elérhetőség</RouterLink>
            </div>
            <div v-else id="menu-container">
                <div id="menu" @click="menuIsOpen = !menuIsOpen">
                    <MenuIcon class="icon" />
                </div>
            </div>
        </div>

        <div id="menu-content" v-if="menuIsOpen">
            <div class="item"><span>Elérhetőség</span></div>
            <div class="item"><span>Elérhetőség</span></div>
            <div class="item"><span>Elérhetőség</span></div>
        </div>
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

    onMounted(() => {
        window.onresize = () => {
            windowWidth.value = window.innerWidth;
        };
    });
</script>

<style scoped lang="scss">
    #header {
        flex: 1 0 20vh;
        background-color: $secondary-bg-color;
        display: grid;
        grid-template-rows: 2fr 1fr auto;

        #menu-content {
            display: flex;
            flex-direction: column;
            align-items: stretch;

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
</style>
