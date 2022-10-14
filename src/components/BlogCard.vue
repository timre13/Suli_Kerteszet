<template>
    <RouterLink class="blog-card" :to="`blog/${props.index}`">
        <div class="left-div">
            <h2>{{ props.title }}</h2>
            <p>
                {{ props.description.substring(0, 300) + "..." }}
                <span class="text-shadow"></span>
            </p>
        </div>
        <img :src="props.img_src" />
    </RouterLink>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        img_src: {
            type: String,
            default: "https://media.tenor.com/_BiwWBWhYucAAAAC/what-huh.gif",
        },
        index: {
            type: Number,
            required: true,
        },
    });
</script>

<style scoped lang="scss">
    $bg-color: #ffa31a;
    $card-border-rad: 8px;
    .blog-card {
        display: flex;
        background: $bg-color;
        width: 500px;
        padding: 10px;
        border-radius: $card-border-rad;
        cursor: pointer;
        color: inherit;
        text-decoration: none;

        p {
            position: relative;
        }

        .text-shadow {
            box-shadow: inset -10px -40px 40px 0px $bg-color;
            border-radius: $card-border-rad;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }

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
