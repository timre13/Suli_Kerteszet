<template>
    <div id="toolcontainer">
        <div id="title">
            <h1>{{ currentTool.title }}</h1>
        </div>
        <div id="image">
            <img :src="currentTool.image" v-if="currentTool.image" />
        </div>
        <div id="info">
            <span>{{ currentTool.text }}</span>
            <span class="price">
                Ár: <span>{{ currentTool.price ? currentTool.price : "Jelenleg nem elérhető" }}</span>
            </span>
            <div><button disabled class="button">Vásárlás</button></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import router from "../router";
    import tools from "../assets/tools.json";
    import { onBeforeMount } from "vue";
    const route = router.currentRoute;
    const currentTool = tools[parseInt(route.value.params.tool as string)];
    onBeforeMount(() => {
        document.title += ` | ${currentTool.title}`;
    });
</script>

<style scoped lang="scss">
    #toolcontainer {
        padding: 2rem 5rem 2rem 5rem;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: minmax(1fr, 10rem) 5fr;

        #image {
            grid-row: span 2;
            overflow: hidden;
            display: grid;
            place-items: center;
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
            gap: 0.5rem;

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

    @media screen and (max-width: 705px) {
        #toolcontainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 2rem;

            #info {
                text-align: justify;
            }
        }
    }
</style>
