<template>
    <div id="header">
        <div id="titlebox">
            <RouterLink to="/">
                <h1>Forest Garden</h1>
            </RouterLink>
        </div>
        <div id="navbox">
            <div id="title">
                <span>{{ currentRoute.meta.title }}:</span>
            </div>
            <div id="link">
                <RouterLink to="/contacts">Elérhetőség</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { RouterLink } from "vue-router";
    import router from "@/router";

    const currentRoute = router.currentRoute;
</script>

<style scoped lang="scss">
    #header {
        flex: 1 0 20vh;
        background-color: $secondary-bg-color;
        display: grid;
        grid-template-rows: 2fr 1fr;

        #titlebox {
            display: grid;
            place-items: center;

            a,
            h1 {
                text-decoration: none;
                color: $title-color;
                font-size: 4rem;
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
