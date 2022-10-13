<template>
    <div id="plantcontainer">
        <div id="title">
            {{ currentPlant.title }}
        </div>
        <div id="image">
            <img :src="currentPlant.image" />
        </div>
        <div id="info">
            {{ currentPlant.text }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import router from "../router";
    import plants from "../assets/plants.json";
    const route = router.currentRoute;
    const currentPlant = plants[parseInt(route.value.params.plant as string)];
</script>

<style scoped lang="scss">
    #plantcontainer {
        padding: 2rem 5rem 2rem 5rem;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 5fr;

        #image {
            grid-row: span 2;
        }
    }
</style>
