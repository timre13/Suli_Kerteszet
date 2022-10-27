<template>
    <RouterLink class="blog-card" :to="`blog/${props.index}`">
        <div class="card-content">
            <div class="img-div"><img :src="props.img_src" /></div>
            <h2>{{ props.title }}</h2>
            <p>
                {{ props.description.substring(0, 300) + "..." }}
                <div class="text-shadow"></div>
            </p>
        </div>
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
            default: "https://via.placeholder.com/1920x1080/eee?text=Placeholder",
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
        position: relative;

        p {
            position: relative;
        }

        .card-content {
            overflow: hidden;
            
            .img-div {
                display: flex;
                align-items: center;
                justify-content: center;
                aspect-ratio: 16 / 9;
                width: 12rem;
                height: fit-content;
                float: right;
            }
        }

        .text-shadow {
            box-shadow: inset -10px -40px 40px 0px $bg-color;
            border-radius: $card-border-rad;
            width: 300%;
            height: 100%;
            position: absolute;
            left: -150%;
            bottom: 0;
            overflow: hidden;
            z-index: 2;
        }

        img {
            max-height: 100%;
            border-radius: 4px;
            z-index: 10;
        }
    }

    .blog-card:hover {
        box-shadow: 4px 4px 10px gray;
        transition-duration: 200ms;
    }
</style>
