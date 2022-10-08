<script setup lang="ts">
    // import { RouterLink, RouterView } from "vue-router";
    import { RouterView } from "vue-router";
    import Header from "./components/Header.vue";
    import Footer from "./components/Footer.vue";
</script>

<template>
    <div id="container">
        <Header />
        <div id="body">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
    #container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    #body {
        flex: 3 0 60vh;
    }
</style>
