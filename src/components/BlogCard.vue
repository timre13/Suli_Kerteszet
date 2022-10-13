<template>
    <div class="blog-card">
        <div class="left-div">
            <h2>{{ props.title }}</h2>
            <p>{{ props.description.substring(0, 300)+"..." }}</p>
        </div>
        <img :src="props.img_src" />
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: ""
        },
        img_src: {
            type: String,
            default: "https://media.tenor.com/_BiwWBWhYucAAAAC/what-huh.gif"
        },
    })
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
        cursor: pointer;

        img {
            max-height: 120px;
            margin-left: auto;
            border-radius: 4px;
            margin-left: 5px;
        }
    }

    .blog-card:hover {
        box-shadow: 4px 4px 10px gray;
        transition-duration: 200ms;
    }
</style>
