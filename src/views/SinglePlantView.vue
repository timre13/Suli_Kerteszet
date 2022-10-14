<template>
    <div id="plantcontainer">
        <div id="title">
            <h1>{{ currentPlant.title }}</h1>
        </div>
        <div id="image">
            <img :src="currentPlant.image" />
        </div>
        <div id="info">
            <span>{{ currentPlant.text }}</span>
            <span class="price">
                Ár: <span>{{ currentPlant.price ? currentPlant.price : "Jelenleg nem elérhető" }}</span>
            </span>
            <div><button disabled class="button">Vásárlás</button></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import router from "../router";
    import plants from "../assets/plants.json";
    import { onBeforeMount } from "vue";
    const route = router.currentRoute;
    const currentPlant = plants[parseInt(route.value.params.plant as string)];
    onBeforeMount(() => {
        document.title += ` | ${currentPlant.title}`;
    });
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
            overflow: hidden;
            img {
                width: 100%;
                border: 1px solid black;
                border-radius: 1rem;
            }
        }

        #title {
            font-size: 2.2rem;
        }

        #info {
            padding: 1rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 1.3rem;

            .price {
                font-size: 2rem;
                font-weight: bolder;
            }

            .button {
                padding: 1.2rem;
                background-color: $secondary-accent-bg-color;
                border-radius: 0.3rem;
                border: 1px solid black;
                font-size: 2rem;
                cursor: not-allowed;
            }
        }
    }
</style>
