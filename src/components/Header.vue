<template>
    <div id="header">
        <div id="titlebox">
            <RouterLink to="/">
                <h1>Forest Garden</h1>
            </RouterLink>
        </div>
        <div id="navbox">
            <div id="title"></div>
            <div id="link">
                <RouterLink to="/contacts">Elérhetőség</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {RouterLink} from "vue-router";
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
            
            a, h1 {
                text-decoration: none;
                color: $title-color;
                font-size: 4rem;
            }
        }

        #navbox {
            background-color: $secondary-accent-bg-color;
            display: flex;
        }
    }
</style>
