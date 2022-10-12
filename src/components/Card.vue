<template>
    <div class="card">
        <h2 class="title">{{ props.title }}</h2>
        <img :src="props.image" class="img" />
        <p class="text">
            {{ props.text }}
        </p>
        <button class="button" @click="WIPAlert">Több</button>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        title: {
            required: true,
            type: String,
        },
        image: {
            default: "https://via.placeholder.com/1920x1080/eee?text=16:9",
            type: String,
        },
        text: {
            type: String,
        },
    });

    function WIPAlert() {
        alert("WIP - Próbálja úra később");
    }
</script>
<style lang="scss" scoped>
    $bg-color: #ffa31a;
    .card {
        flex: 0 0 calc(25% - 2rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        padding: 1rem 2rem 1rem 2rem;
        background-color: $bg-color;
        border: 1px solid black;
        border-radius: 0.8rem;

        .title {
            font-size: 3rem;
        }

        .img {
            aspect-ratio: 16 / 9;
            width: 100%;
            border: 1px solid black;
            border-radius: 0.2rem;
        }

        .button {
            padding: 0.5rem;
            width: 50%;
            font-size: 1.2rem;
            box-sizing: border-box;
            border: 1px solid black;
            border-radius: 0.2rem;
            background-color: darken($bg-color, 10);
            &:focus {
                outline: 1px solid black;
            }
            &:hover {
                background-color: darken($bg-color, 9);
            }
            &:active {
                transform: translateY(1px);
            }
        }
    }
</style>
