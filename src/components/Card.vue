<template>
    <div class="card">
        <h2 class="title">{{ props.title }}</h2>
        <img :src="props.image" class="img" />
        <div class="blur-container">
            <p class="text">
                {{ props.text?.substring(0, 150) + "..." }}
            </p>
            <div class="blur"></div>
        </div>
        <div class="price">
            <span><b>Ár:</b> {{ props.price ? props.price : "Nem elérhető" }}</span>
        </div>
        <div class="buttons">
            <button class="button disabled" disabled>Vásárlás</button>
            <RouterLink class="button" :to="`${props.sub_page_prefix}/${props.index}`"> Több </RouterLink>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { RouterLink } from "vue-router";
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
        index: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
        },
        sub_page_prefix: {
            type: String,
            required: true,
        }
    });
</script>
<style lang="scss" scoped>
    $bg-color: #ffa31a;
    .card {
        flex: 0 0 calc(25% - 2rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1.2rem;
        padding: 1rem 2rem 1rem 2rem;
        background-color: $bg-color;
        border: 1px solid black;
        border-radius: 0.8rem;
        min-width: 20rem;

        .blur-container {
            position: relative;

            .blur {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: inset 0px -25px 30px 0px $bg-color;
            }
        }

        .title {
            font-size: 3rem;
        }

        .img {
            aspect-ratio: 16 / 9;
            width: 100%;
            border: 1px solid black;
            border-radius: 0.2rem;
        }

        .price {
            font-size: 1.8rem;
        }

        .buttons {
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
        }

        .button {
            padding: 0.5rem;
            width: 45%;
            font-size: 1.2rem;
            box-sizing: border-box;
            border: 1px solid black;
            border-radius: 0.2rem;
            background-color: darken($bg-color, 10);
            display: grid;
            place-items: center;
            color: inherit;
            text-decoration: none;
            &:focus {
                outline: 1px solid black;
            }
            &:hover {
                background-color: darken($bg-color, 6);
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .disabled {
            cursor: not-allowed;
            background-color: darken($bg-color, 20);

            &:hover {
                background-color: darken($bg-color, 20);
            }

            &:active {
                transform: translateY(0px);
            }
        }
    }
</style>
