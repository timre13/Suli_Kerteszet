<template>
    <div class="card">
        <h2 class="title">Title</h2>
        <img src="https://via.placeholder.com/1920x1080/eee?text=16:9" alt="placeholder" class="img" />
        <p class="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia provident explicabo in tempore aspernatur,
            atque totam excepturi, esse quas voluptas quae, molestias eos sed nostrum!
        </p>
        <button class="button">Több</button>
    </div>
</template>
<script setup lang="ts"></script>
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
        }

        .button {
            padding: 0.5rem;
            width: 50%;
            font-size: 1.2rem;
            outline: none;
            border: 1px solid black;
            border-radius: 0.2rem;
            background-color: darken($bg-color, 10);
            &:focus {
                border: 2px solid black;
            }
        }
    }
</style>
