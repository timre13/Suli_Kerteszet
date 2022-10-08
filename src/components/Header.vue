<template>
    <div id="header">
        <div id="titlebox">
            <h1>Forest Garden</h1>
        </div>
        <div id="navbox"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    #header {
        flex: 1 0 20vh;
        background-color: $secondary-bg-color;
        display: grid;
        grid-template-rows: 2fr 1fr;

        #titlebox {
            display: grid;
            place-items: center;

            h1 {
                color: $title-color;
                font-size: 4rem;
            }
        }

        #navbox {
            background-color: $secondary-accent-bg-color;
        }
    }
</style>
