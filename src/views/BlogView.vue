<script setup lang="ts">
    import BlogCard from "../components/BlogCard.vue";
</script>

<template>
    <div id="blog-card-div">
        <BlogCard
            :title="'foo'"
            :description="'foo'"
            :img_src="'https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg'"
        ></BlogCard>
        <BlogCard
            :title="'foo'"
            :description="'foo'"
            :img_src="'https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg'"
        ></BlogCard>
        <BlogCard
            :title="'foo'"
            :description="'foo'"
            :img_src="'https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg'"
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
    }
</style>
