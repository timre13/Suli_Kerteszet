<template>
    <div class="flex">
        <div id="cards">
            <Card
                v-for="(tool, index) in tools"
                :key="index"
                :title="tool.title"
                :text="tool.text"
                :image="tool.image ? tool.image : undefined"
                :index="index"
                :price="tool.price"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
    import Card from "../components/Card.vue";
    import tools from "@/assets/tools.json";
</script>
<style lang="scss" scoped>
    .flex {
        width: 100%;
        height: 100%;
    }
    #cards {
        flex: 1 0;
        height: 100%;
        box-sizing: border-box;
        padding: 2rem 5rem 2rem 5rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        // display: grid;
        // grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
        // grid-template-rows: repeat(auto-fit, 1fr);
        // grid-gap: 2rem;
        gap: 2rem;
    }
</style>
