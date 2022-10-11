<template>
    <div class="blog-card">
        <div class="left-div">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
        <img :src="img_src" />
    </div>
</template>

<script lang="ts">
    export default {
        name: "BlogCard",
        props: {
            img_src: String,
            title: String,
            description: String,
        },
    };
</script>

<style scoped lang="scss">
    $bg-color: #ffa31a;
    .blog-card {
        display: flex;
        background: $bg-color;
        width: 400px;
        padding: 10px;
        border-radius: 8px;
        flex-shrink: 0;

        img {
            max-height: 120px;
            margin-left: auto;
        }
    }
</style>
