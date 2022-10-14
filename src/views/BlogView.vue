<script setup lang="ts">
    import BlogCard from "../components/BlogCard.vue";
    import blogs from "@/assets/blogs.json";
</script>

<template>
    <div id="blog-card-div">
        <BlogCard
            v-for="(card, i) in blogs"
            :title="card.title"
            :description="card.description"
            :img_src="card.img_src ? card.img_src : undefined"
            :index="i"
        ></BlogCard>
    </div>
</template>

<style lang="scss" scoped>
    #blog-card-div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px;
        justify-content: center;
    }
</style>
