<script setup lang="ts">
    import router from "../router";
    import blogs from "../assets/blogs.json";
    import { onBeforeMount } from "vue";
    const route = router.currentRoute;
    const currentBlog = blogs[parseInt(route.value.params.blog as string)];
    onBeforeMount(() => {
        document.title += ` | ${currentBlog.title}`;
    });
</script>

<template>
    <div id="main-container">
        <div id="title"><h1>{{ currentBlog.title }}</h1></div>
        <div id="content-container">
            <img id="image" v-if="currentBlog.img_src" :src="currentBlog.img_src">
            <div id="description">{{ currentBlog.description }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-container {
        padding: 2rem 5rem 2rem 5rem;

        #title {
            font-size: 2.2rem;
            margin-bottom: 20px;
        }

        #content-container {
            #description {
                padding: 1rem;
                font-size: 1.3rem;
                text-align: justify;
            }

            #image {
                max-height: 800px;
                border: 1px solid black;
                float: right;
                margin: 20px;
            }
        }
    }
</style>